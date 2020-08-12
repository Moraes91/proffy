import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/converHoursToMinutes';

//criação da interface do Schedule Item
interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesController {
    
    //MÉTODO PARA LISTAGEM DAS AULAS
    async index(request:Request, response:Response) {
        const filters = request.query;

        const week_day = filters.week_day as string;
        const subject = filters.subject as string;
        const time = filters.time as string;

        //verificando se campos para pesquisa estão preenchidos
        if (!filters.week_day || !filters.subject || !filters.time) {
            return response.status(400).json({
                error: 'Missing filters to search classes'
            });
        }

        //conversão de horas para minutos
        const timeInMinutes = convertHourToMinutes(time);

        //consulta por matéria
        const classes = await db('classes')
            .where('classes.subject', '=', subject)
        
        return response.json(classes);
    }    
    
    //CRIAÇÃO DE NOVA AULA
    async create(request:Request, response:Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;
    
        //criação da transaction para sincronização das inserções
        const trx = await db.transaction();
    
        try {
            //inserção de usuários
            const insertedUsersIds =
            await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,    
            });
            
            //armazenando id do primeiro usuario
            const user_id = insertedUsersIds[0];
    
    
            //inserção de aulas
            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id,
            });
    
            //pegando id da aula
            const class_id = insertedClassesIds[0];
    
            //inserção de horario
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                };
            });
    
            await trx('class_schedule').insert(classSchedule);
    
            await trx.commit();
    
            //status 201 - criado com sucesso
            return response.status(201).send();
    
        } catch (err) {
    
            await trx.rollback();
            
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
    }
}
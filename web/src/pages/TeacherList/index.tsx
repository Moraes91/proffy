import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList () {
    return (
        <div id="page-teacher-list" className="container">
            
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Select 
                        name="subject" 
                        label="Matéria"
                        options={[
                            { value:'Português', label:'Português' },
                            { value:'Literatura', label:'Literatura' },
                            { value:'Matemática', label:'Matemática' },
                            { value:'História', label:'História' },
                            { value:'Geografia', label:'Geografia' },
                            { value:'Ciências', label:'Ciências' },
                            { value:'Física', label:'Física' },
                            { value:'Química', label:'Química' },
                            { value:'Geometria', label:'Geometria' },
                            { value:'Filosofia', label:'Filosofia' },
                            { value:'Sociologia', label:'Sociologia' },
                            { value:'Religião', label:'Religião' },
                            { value:'Artes', label:'Artes' },                           
                            { value:'Música', label:'Música' },                   
                            { value:'Educação Física', label:'Educação Física' },
                            { value:'Informática', label:'Informática' }, 
                        ]}
                    />
                    <Select 
                        name="week_day" 
                        label="Dia da Semana"
                        options={[
                            { value:'0', label:'Domingo' },
                            { value:'1', label:'Segunda' },
                            { value:'2', label:'Terça' },
                            { value:'3', label:'Quarta' },
                            { value:'4', label:'Quinta' },
                            { value:'5', label:'Sexta' },
                            { value:'6', label:'Sábado' }
                        ]}
                    />      
                    <Input type="time" name="time" label="Hora" />    

                </form>
            </PageHeader>

            <main>
                <TeacherItem /> 
                <TeacherItem /> 
                <TeacherItem /> 
                <TeacherItem /> 
                <TeacherItem />    
            </main>
        </div>
    )   
}

export default TeacherList;
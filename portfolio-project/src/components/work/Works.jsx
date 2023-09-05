import React, { useEffect } from 'react';
import './work.css';
import { useState } from 'react';
import  { projectsData } from './Data';
import  { projectsNav } from './Data';
import WorkItems from './WorkItems';

const Work = () => {
    const [item, setItem] = useState('all');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if(item === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item;
              });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e) => {
        setItem(e.target.textContent.toLowerCase());
    };

    return (
        <div>
            <div className="work__filters">
            { projectsNav.map((navItem, index) => {
                return (
                    <span onClick={handleClick} className={`${item === navItem.name ? 'active-work' : ''} work__item`} key={index}>{navItem.name}</span>
                )
            })}
        </div>

            <div className="work__container container grid">
             { projects.map((project) => {
                return <WorkItems item={project} key={project.name}/>
             }) } 
            </div>
        </div>
    )
}

export default Work
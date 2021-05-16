import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-skill',
  templateUrl: './tech-skill.component.html',
  styleUrls: ['./tech-skill.component.scss']
})
export class TechSkillComponent implements OnInit {
     categories:
        [
            {
                'name': 'developement',
                'skills': ['java', 'jee' , 'c#' ]
            },
            {
                'name': 'Database',
                'skills': ['sql' , 'oracle']
            },
            {
                'name': 'Framworks',
                'skills': ['angular' , 'react' , 'spring']
            },
            {
                'name': 'Build',
                'skills': [
                    'java'
                ]
            },
            {
                'name': 'Workflow engine',
                'skills': [
                    'java'
                ]
            },
            {
                'name': 'Versionning systems',
                'skills': [
                    'java'
                ]
            },
            {
                'name': 'Test tools',
                'skills': [
                    'java'
                ]
            },
            {
                'name': 'Continuous Integration',
                'skills': [
                    'java'
                ]
            }
        ];
    constructor() { }
    ngOnInit() {
  }

}

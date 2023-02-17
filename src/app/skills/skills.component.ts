import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[{name:"Angular",percent:80,remark:'very-good'}, {name:".Net Web Api",percent:70,remark:'good'},{name:"React Native",percent:50,remark:'good'},{name:"Python",percent:70,remark:'good'}, {name:"JavaScript, BootStrap,HTML,CSS",percent:80,remark:'good'}],
    tools:[{name:"Git"},{name:"Wix,Overleaf"},{name:"Windows"},{name:"MySql"},{name:"MS Dynamics, Odoo"}],
    // methodologies:[{name:"Scrum",percent:70,remark:'very-good'},{name:"Uml",percent:90,remark:'excellent'},{name:"Disign Thinking",percent:70,remark:'good'},{name:"TDD",percent:90,remark:'excellent'},{name:"DevOps",percent:50,remark:'average'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}

    
    
  

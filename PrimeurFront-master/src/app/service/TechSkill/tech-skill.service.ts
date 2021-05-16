import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Settings} from '../../settings/settings';
import {TechSkill} from '../../models/TechSkill';

@Injectable({
  providedIn: 'root'
})
export class TechSkillService {

  constructor(private http: HttpClient) { }

  public findAllTechSkill() {
      return this.http.get(Settings.APP_URL + '/' );
  }

  public createTechSkill(techSkill: TechSkill) {
      return this.http.post(Settings.APP_URL + '/' , techSkill);
  }
}

import { TestBed } from '@angular/core/testing';

import { SoftSkillService } from './soft-skill.service';

describe('SoftSkillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoftSkillService = TestBed.get(SoftSkillService);
    expect(service).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoFormComponent } from './conteudo-form.component';

describe('ConteudoFormComponent', () => {
  let component: ConteudoFormComponent;
  let fixture: ComponentFixture<ConteudoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteudoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

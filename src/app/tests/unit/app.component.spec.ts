import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../../app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should search', () => {

    
    component.search = 'test'
    const compiled = fixture.debugElement.query(By.css('.search-bar input'));
    const keyEnter = new KeyboardEvent('keydown', { key: 'Enter' });
    compiled.nativeElement.dispatchEvent(keyEnter);

    expect(component.currentSearch).toEqual(component.search);

    
    component.search = 'test2'
    component.changeState(true);
    component.goSearch();

    expect(component.currentSearch).toEqual('test');

  });

  it('should disable search', () => {

    component.search = 'test'
    component.changeState(true);
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('.disabled-search input')).nativeElement
    ).withContext;

    component.changeState(false);
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('.disabled-search input'))
    ).toEqual(null);
  });
});

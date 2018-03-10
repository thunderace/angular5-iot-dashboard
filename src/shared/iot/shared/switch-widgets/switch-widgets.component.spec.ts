
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { SwitchWidgetsComponent } from './switch-widgets.component';
import { OutputPinComponent } from '../output-pin/output-pin.component';
import { appReducersGenerator } from '@app/app.reducers';
import { IWidget } from '@shared/iot/definitions';

import { CommunicateService } from '@shared/core/services/communicate.service';
import { RequestsService } from '@shared/core/services/requests.service';
import { PermissionsService } from '@shared/core/services/permissions.service';
import { MocksService } from '@shared/core/services/mocks.service';
import { ActionsService } from '@shared/core/services/actions.service';

function mockWidget (): IWidget {
  const pin = {
    id: 0,
    type: 'output',
    value: 'OFF'
  };
  return {
    device: {
      uniqueid: 'dev-444',
      pins: [ pin ]
    },
    location: {
      icon: 'icon',
      name: 'Basket',
      id: 1
    },
    name: 'Test widget',
    pin
  };
}

describe('SwitchWidgetsComponent', () => {
  let component: SwitchWidgetsComponent;
  let fixture: ComponentFixture<SwitchWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SwitchWidgetsComponent,
        OutputPinComponent
      ],
      providers: [
        CommunicateService,
        RequestsService,
        PermissionsService,
        MocksService,
        ActionsService
      ],
      imports: [
        appReducersGenerator()
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchWidgetsComponent);
    component = fixture.componentInstance;
    component.widget = mockWidget ();
    fixture.detectChanges();
  });

  it('should be created', inject([CommunicateService], (service: CommunicateService) => {
    expect(service).toBeTruthy();
  }));
});
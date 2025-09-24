import { Routes } from '@angular/router';
import { PersonManager } from './features/person-manager/person-manager';
import { Dashboard } from './features/dashboard/dashboard';
import { SystemLogs } from './features/system-logs/system-logs';
import { AstronautDutyManager } from './features/astronaut-duty-manager/astronaut-duty-manager';
import { AstronautDetail } from './features/astronaut-detail/astronaut-detail';
import { Astronauts } from './features/astronauts/astronauts';

export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'people', component: PersonManager },
  { path: 'logs', component: SystemLogs},
  { path: 'astronauts', component: Astronauts },
  { path: 'duties', component: AstronautDutyManager },
  { path: 'detail', component: AstronautDetail },
];

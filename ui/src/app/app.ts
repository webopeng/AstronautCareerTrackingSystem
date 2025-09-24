import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { TabList } from "./features/tab-list/tab-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, TabList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Astronaut-Career-Tracking-System');
}

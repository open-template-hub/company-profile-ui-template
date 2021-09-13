import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommandType } from 'src/app/enum/command-type.enum';
import { CommandLineComponent } from '../command-line/command-line.component';

@Component({
  selector: 'app-animated-code-editor',
  templateUrl: './animated-code-editor.component.html',
  styleUrls: ['./animated-code-editor.component.scss'],
})
export class AnimatedCodeEditorComponent implements OnInit {
  constructor(private resolver: ComponentFactoryResolver) {}

  @ViewChild('codeEditorContent', { static: true, read: ViewContainerRef })
  codeEditorContentRef: ViewContainerRef;

  factory: ComponentFactory<CommandLineComponent>;
  index: number = 0;

  commandLines = [
    {
      command: 'open-template-hub-server-generator',
      type: CommandType.Request,
    },
    { command: '1) Payment Server', type: CommandType.Response },
    { command: '2) Auth Server', type: CommandType.Response },
  ];

  ngOnInit(): void {
    this.codeEditorContentRef.clear();
    this.index = 0;
    this.factory = this.resolver.resolveComponentFactory(CommandLineComponent);
    this.animationTrigger();
  }

  createComponent = (commandLine: any) => {
    if (this.index < this.commandLines.length) {
      this.index++;
      const componentRef = this.codeEditorContentRef.createComponent(
        this.factory
      );
      componentRef.instance.command = commandLine.command;
      componentRef.instance.type = commandLine.type;
      componentRef.instance.animationComplete = this.animationTrigger;
    }
  };

  animationTrigger = () => {
    console.log('Animation triggered with index: ', this.index);
    this.createComponent(this.commandLines[this.index]);
  };
}

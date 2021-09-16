import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommandLine } from 'src/app/model/product/product.model';
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

  @Input() commandLines: CommandLine[];

  ngOnInit(): void {
    this.initializeComponent();
  }

  initializeComponent = () => {
    this.codeEditorContentRef.clear();
    this.index = 0;
    this.factory = this.resolver.resolveComponentFactory(CommandLineComponent);
  };

  ngAfterViewInit(): void {
    this.animationTrigger();
  }

  ngOnChanges(): void {
    this.initializeComponent();
    this.animationTrigger();
  }

  createComponent = (commandLine: CommandLine) => {
    if (this.index < this.commandLines.length) {
      this.index++;
      var componentRef = this.codeEditorContentRef.createComponent(
        this.factory
      );
      componentRef.instance.commandLine = commandLine;
      componentRef.instance.animationComplete = this.animationTrigger;
    }
  };

  animationTrigger = () => {
    console.log('Animation triggered with index: ', this.index);
    this.createComponent(this.commandLines[this.index]);
  };
}
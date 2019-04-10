//@flow
interface GlobalProps {
  componentId: string;
  componentNames: Array<string>;
}

class Global {
  componentId: string;
  componentNames: Array<string>;

  constructor(props: GlobalProps) {
    this.componentId = props.componentId;
    this.componentNames = props.componentNames;
  }

  getComponentId = (): string => this.componentId;

  setComponentId = (id: string): void => {
    this.componentId = id;
  };

  getComponentNames = (): Array<string> => this.componentNames;

  pushComponentName = (name: string): Array<string> => {
    const names: Array<string> = this.componentNames;
    names.push(name);
    this.componentNames = names;
    return names;
  };

  popComponentName = (): string => {
    const names: Array<string> = this.componentNames;
    const name: string = names.pop() || '';
    this.componentNames = names;
    return name;
  };

  getLatestComponentName = (): string | null => {
    const comps: Array<string> = this.componentNames;
    const len: number = comps.length;
    return len === 0 ? null : comps[len - 1];
  };
}

export default new Global({ componentId: '', componentNames: [] });

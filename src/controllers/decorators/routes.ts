import 'reflect-metadata';

const get = (path: string) => {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata('path', path, target, key);
  }
}

export {get};
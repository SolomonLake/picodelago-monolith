// @flow

export interface NgModule {
  name: string;
  constant(name: string, def: any): NgModule;
  component(name: string, def: {}): NgModule;
  controller(name: string, def: any[]): NgModule;
  controller(name: string, def: Function): NgModule;
  factory(name: string, def: any[]): NgModule;
  factory(name: string, def: Function): NgModule;
  service(name: string, def: any[]): NgModule;
  service(name: string, def: Function): NgModule;
  directive(name: string, def: any[]): NgModule;
  directive(name: string, def: Function): NgModule;
  config(def: any[]): NgModule;
  config(def: Function): NgModule;
  filter(name: string, def: Function): IModule;
  run(def: any[]): NgModule;
}

export interface NgTimeoutService {
  (delay?: number, invokeApply?: boolean): Promise<void>;
  <T>(
    fn: (...args: any[]) => T,
    delay?: number,
    invokeApply?: boolean,
    ...args: any[]
  ): Promise<T>;
  cancel(promise?: Promise<any>): boolean;
}

export interface NgIntervalService {
  (
    func: Function,
    delay: number,
    count?: number,
    invokeApply?: boolean,
    ...args: any[]
  ): IPromise<any>;
  cancel(promise: IPromise<any>): boolean;
}

export interface NgScope {
  +$root: NgScope;
  $$childHead: ?NgScope;
  $$nextSibling: ?NgScope;
  $id: number;
  $$watchers: {}[];
  $watch(path: string, handler: (value: any) => void): void;
  $watch(getter: Function, handler: (value: any) => void): void;
  $on(eventName: string, handler: (event: any, data: any) => void): () => void;
  $emit(eventName: string): void;
  $broadcast(eventName: string, data: any): void;
  $eval(expression: string | Function, locals?: {}): any;
  $evalAsync(expression?: string | Function, locals?: {}): void;
  $applyAsync(action: Function): void;
  $digest(): void;
}

export interface NgCompiledExpression {
  (context: any, locals?: any): any;

  literal: boolean;
  constant: boolean;

  // If value is not provided, undefined is gonna be used since the implementation
  // does not check the parameter. Let's force a value for consistency. If consumer
  // wants to undefine it, pass the undefined value explicitly.
  assign(context: any, value: any): any;
}

export interface NgParseService {
  (
    expression: string,
    interceptorFn?: (value: any, scope: NgScope, locals: any) => any,
    expensiveChecks?: boolean
  ): NgCompiledExpression;
}

export interface NgJQuery {
  (html: string): any; // This is for sure isn't right
  (el: Element): any; // This is for sure isn't right
}

export interface NgController$onInit {
  $onInit(): void;
}

export interface NgController$onChanges {
  $onChanges(changes: any): void;
}

export type NgController = {
  $onInit?: () => void,
  $onChanges?: (changes: any) => void,
  $doCheck?: () => void,
  $onDestroy?: () => void,
  $postLink?: () => void
};

export interface Ng {
  module(name: string, def: any[]): NgModule;
  isFunction(value: any): boolean;
  forEach<T>(
    obj: T[],
    iterator: (value: T, key: number) => any,
    context?: any
  ): any;
  forEach<T>(
    obj: { [index: string]: T },
    iterator: (value: T, key: string) => any,
    context?: any
  ): any;
  copy<T>(source: T, destination?: T): T;
  equals(value1: any, value2: any): boolean;
  extend(destination: any, ...sources: any[]): any;
  noop(...args: any[]): void;
  bootstrap(
    element: string | Element | Document,
    modules?: (string | Function | any[])[]
  ): void;
  element: NgJQuery;
  identity: NgIdentity;
}

export type NgIdentity = T => T;

export interface AngularQ {
  when: <T>(value: T) => AngularPromise<T>;
  reject: <T>(value: T) => AngularPromise<T>;
}

export interface AngularPromise<T> {
  then: <U>(a: (resolve: U) => T) => AngularPromise<*>;
  catch: <U>(a: (e: Error) => U) => AngularPromise<*>;
  finally: <U>(a: (result: U | typeof Error) => T) => AngularPromise<*>;
}

declare var angular: Ng;

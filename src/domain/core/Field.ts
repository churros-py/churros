import "reflect-metadata";

export function Field() {
  return function (target: any, key: string) {
    if (!Reflect.hasMetadata("fields", target.constructor)) {
      Reflect.defineMetadata("fields", [], target.constructor);
    }

    const fields = Reflect.getMetadata("fields", target.constructor);

    fields.push(key);

    Reflect.defineMetadata("fields", fields, target.constructor);
  };
}

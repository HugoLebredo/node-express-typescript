# Typescript + node.js
Pequeño ejemplo servidor de node con un endpoint utilizando typescript

### Dependencias
- [express](https://expressjs.com/) : Uno de los paquetes más famosos de node. Es un framework que permite desarrollar APIs facilmente.
### Dependencias de desarrollo
- [typescript](https://www.typescriptlang.org/) Lenguaje de programación fuertemente tipado que corre sobre javascript
- [@types/express](https://www.npmjs.com/package/@types/express) :No todos los paquetes poseen la definición de tipos necesaria para trabajar con typescript. Cuando esto ocurre hay que añadirlas a parte, como otra dependencia. Este es el caso de `express`. Instalando este paquete typescript reconocerá automáticamente nuevos tipos.  
- [ts-standard](https://www.npmjs.com/package/ts-standard) : Es un linter. Para utilizarlo automaticamente se han añadido las siguientes líneas al **package.json**:
```{json}
  "eslintConfig": {
    "parserOptions": {
      "project": "./tsconfig.json"
    },
    "extends" : ["./node_modules/ts-standard/eslintrc.json"]
  }
```

- [ts-node-dev](ts-node-dev) : El **nodemon** de typescript. Cada vez que se guarde un archivo relanzará automaticamente la aplicación sin necesidad de tener que volver a ejecutar el comando de ejecución. Para utilizar esto debemos ejecutar el siguiente script en el **package.json**: `"dev": "ts-node-dev src/index.ts"`

## Typescript
Por convenio los tipos se deben definir en el archivo `types.d.ts` que significa *types.definitions.ts*.
Las enumeraciones de typescript deben definirse un archivo diferente al de los tipos que suele denominarse `enums.ts`. La razón es porque las enumeraciones se transforman a javascript y en el proceso de transpilación el archivo `types.d.ts` se omite por lo que si se importa una enumeración nunca se encontraría la dependencia.

Los tipos e interfaces solo se utilizan en el desarrollo de la aplicación, no tienen ningún efecto en la ejecución de la aplicación.

```{ts}
export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
```

Las enumeraciones si que se transpilan a javascript. En esta aplicación podemos ver en la función `isWeather()` del archivo `src/utils.ts` como la enumeración `Weather` se trata como un objeto. Ya explicaremos la funcionalidad más adelante, lo importante es ser conscientes de que `Weather ` se ha transpilado y a todos los ejectos forma parte del código javascript.

```{js}
export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Couldy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}
```

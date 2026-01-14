
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>
/**
 * Model Char
 * 
 */
export type Char = $Result.DefaultSelection<Prisma.$CharPayload>
/**
 * Model Cord
 * 
 */
export type Cord = $Result.DefaultSelection<Prisma.$CordPayload>
/**
 * Model Score
 * 
 */
export type Score = $Result.DefaultSelection<Prisma.$ScorePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Settings
 * const settings = await prisma.setting.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Settings
   * const settings = await prisma.setting.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.char`: Exposes CRUD operations for the **Char** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chars
    * const chars = await prisma.char.findMany()
    * ```
    */
  get char(): Prisma.CharDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cord`: Exposes CRUD operations for the **Cord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cords
    * const cords = await prisma.cord.findMany()
    * ```
    */
  get cord(): Prisma.CordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.score`: Exposes CRUD operations for the **Score** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scores
    * const scores = await prisma.score.findMany()
    * ```
    */
  get score(): Prisma.ScoreDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Setting: 'Setting',
    Char: 'Char',
    Cord: 'Cord',
    Score: 'Score'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "setting" | "char" | "cord" | "score"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
      Char: {
        payload: Prisma.$CharPayload<ExtArgs>
        fields: Prisma.CharFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharPayload>
          }
          findFirst: {
            args: Prisma.CharFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharPayload>
          }
          findMany: {
            args: Prisma.CharFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharPayload>[]
          }
          create: {
            args: Prisma.CharCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharPayload>
          }
          createMany: {
            args: Prisma.CharCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharPayload>[]
          }
          delete: {
            args: Prisma.CharDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharPayload>
          }
          update: {
            args: Prisma.CharUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharPayload>
          }
          deleteMany: {
            args: Prisma.CharDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharPayload>[]
          }
          upsert: {
            args: Prisma.CharUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharPayload>
          }
          aggregate: {
            args: Prisma.CharAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChar>
          }
          groupBy: {
            args: Prisma.CharGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharCountArgs<ExtArgs>
            result: $Utils.Optional<CharCountAggregateOutputType> | number
          }
        }
      }
      Cord: {
        payload: Prisma.$CordPayload<ExtArgs>
        fields: Prisma.CordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CordPayload>
          }
          findFirst: {
            args: Prisma.CordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CordPayload>
          }
          findMany: {
            args: Prisma.CordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CordPayload>[]
          }
          create: {
            args: Prisma.CordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CordPayload>
          }
          createMany: {
            args: Prisma.CordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CordPayload>[]
          }
          delete: {
            args: Prisma.CordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CordPayload>
          }
          update: {
            args: Prisma.CordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CordPayload>
          }
          deleteMany: {
            args: Prisma.CordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CordPayload>[]
          }
          upsert: {
            args: Prisma.CordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CordPayload>
          }
          aggregate: {
            args: Prisma.CordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCord>
          }
          groupBy: {
            args: Prisma.CordGroupByArgs<ExtArgs>
            result: $Utils.Optional<CordGroupByOutputType>[]
          }
          count: {
            args: Prisma.CordCountArgs<ExtArgs>
            result: $Utils.Optional<CordCountAggregateOutputType> | number
          }
        }
      }
      Score: {
        payload: Prisma.$ScorePayload<ExtArgs>
        fields: Prisma.ScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          findFirst: {
            args: Prisma.ScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          findMany: {
            args: Prisma.ScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          create: {
            args: Prisma.ScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          createMany: {
            args: Prisma.ScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          delete: {
            args: Prisma.ScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          update: {
            args: Prisma.ScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          deleteMany: {
            args: Prisma.ScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          upsert: {
            args: Prisma.ScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          aggregate: {
            args: Prisma.ScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScore>
          }
          groupBy: {
            args: Prisma.ScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScoreCountArgs<ExtArgs>
            result: $Utils.Optional<ScoreCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    setting?: SettingOmit
    char?: CharOmit
    cord?: CordOmit
    score?: ScoreOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SettingCountOutputType
   */

  export type SettingCountOutputType = {
    Cords: number
    Scores: number
  }

  export type SettingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cords?: boolean | SettingCountOutputTypeCountCordsArgs
    Scores?: boolean | SettingCountOutputTypeCountScoresArgs
  }

  // Custom InputTypes
  /**
   * SettingCountOutputType without action
   */
  export type SettingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingCountOutputType
     */
    select?: SettingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SettingCountOutputType without action
   */
  export type SettingCountOutputTypeCountCordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CordWhereInput
  }

  /**
   * SettingCountOutputType without action
   */
  export type SettingCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
  }


  /**
   * Count Type CharCountOutputType
   */

  export type CharCountOutputType = {
    Cords: number
  }

  export type CharCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cords?: boolean | CharCountOutputTypeCountCordsArgs
  }

  // Custom InputTypes
  /**
   * CharCountOutputType without action
   */
  export type CharCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharCountOutputType
     */
    select?: CharCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharCountOutputType without action
   */
  export type CharCountOutputTypeCountCordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _avg: SettingAvgAggregateOutputType | null
    _sum: SettingSumAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingAvgAggregateOutputType = {
    id: number | null
  }

  export type SettingSumAggregateOutputType = {
    id: number | null
  }

  export type SettingMinAggregateOutputType = {
    id: number | null
    name: string | null
    img: string | null
  }

  export type SettingMaxAggregateOutputType = {
    id: number | null
    name: string | null
    img: string | null
  }

  export type SettingCountAggregateOutputType = {
    id: number
    name: number
    img: number
    _all: number
  }


  export type SettingAvgAggregateInputType = {
    id?: true
  }

  export type SettingSumAggregateInputType = {
    id?: true
  }

  export type SettingMinAggregateInputType = {
    id?: true
    name?: true
    img?: true
  }

  export type SettingMaxAggregateInputType = {
    id?: true
    name?: true
    img?: true
  }

  export type SettingCountAggregateInputType = {
    id?: true
    name?: true
    img?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _avg?: SettingAvgAggregateInputType
    _sum?: SettingSumAggregateInputType
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    id: number
    name: string
    img: string
    _count: SettingCountAggregateOutputType | null
    _avg: SettingAvgAggregateOutputType | null
    _sum: SettingSumAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    img?: boolean
    Cords?: boolean | Setting$CordsArgs<ExtArgs>
    Scores?: boolean | Setting$ScoresArgs<ExtArgs>
    _count?: boolean | SettingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    img?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    img?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectScalar = {
    id?: boolean
    name?: boolean
    img?: boolean
  }

  export type SettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "img", ExtArgs["result"]["setting"]>
  export type SettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cords?: boolean | Setting$CordsArgs<ExtArgs>
    Scores?: boolean | Setting$ScoresArgs<ExtArgs>
    _count?: boolean | SettingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SettingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {
      Cords: Prisma.$CordPayload<ExtArgs>[]
      Scores: Prisma.$ScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      img: string
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingWithIdOnly = await prisma.setting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Cords<T extends Setting$CordsArgs<ExtArgs> = {}>(args?: Subset<T, Setting$CordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Scores<T extends Setting$ScoresArgs<ExtArgs> = {}>(args?: Subset<T, Setting$ScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Setting model
   */
  interface SettingFieldRefs {
    readonly id: FieldRef<"Setting", 'Int'>
    readonly name: FieldRef<"Setting", 'String'>
    readonly img: FieldRef<"Setting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting createManyAndReturn
   */
  export type SettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting updateManyAndReturn
   */
  export type SettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Setting.Cords
   */
  export type Setting$CordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cord
     */
    select?: CordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cord
     */
    omit?: CordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CordInclude<ExtArgs> | null
    where?: CordWhereInput
    orderBy?: CordOrderByWithRelationInput | CordOrderByWithRelationInput[]
    cursor?: CordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CordScalarFieldEnum | CordScalarFieldEnum[]
  }

  /**
   * Setting.Scores
   */
  export type Setting$ScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    cursor?: ScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
  }


  /**
   * Model Char
   */

  export type AggregateChar = {
    _count: CharCountAggregateOutputType | null
    _avg: CharAvgAggregateOutputType | null
    _sum: CharSumAggregateOutputType | null
    _min: CharMinAggregateOutputType | null
    _max: CharMaxAggregateOutputType | null
  }

  export type CharAvgAggregateOutputType = {
    id: number | null
  }

  export type CharSumAggregateOutputType = {
    id: number | null
  }

  export type CharMinAggregateOutputType = {
    id: number | null
    name: string | null
    img: string | null
  }

  export type CharMaxAggregateOutputType = {
    id: number | null
    name: string | null
    img: string | null
  }

  export type CharCountAggregateOutputType = {
    id: number
    name: number
    img: number
    _all: number
  }


  export type CharAvgAggregateInputType = {
    id?: true
  }

  export type CharSumAggregateInputType = {
    id?: true
  }

  export type CharMinAggregateInputType = {
    id?: true
    name?: true
    img?: true
  }

  export type CharMaxAggregateInputType = {
    id?: true
    name?: true
    img?: true
  }

  export type CharCountAggregateInputType = {
    id?: true
    name?: true
    img?: true
    _all?: true
  }

  export type CharAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Char to aggregate.
     */
    where?: CharWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chars to fetch.
     */
    orderBy?: CharOrderByWithRelationInput | CharOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chars
    **/
    _count?: true | CharCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharMaxAggregateInputType
  }

  export type GetCharAggregateType<T extends CharAggregateArgs> = {
        [P in keyof T & keyof AggregateChar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChar[P]>
      : GetScalarType<T[P], AggregateChar[P]>
  }




  export type CharGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharWhereInput
    orderBy?: CharOrderByWithAggregationInput | CharOrderByWithAggregationInput[]
    by: CharScalarFieldEnum[] | CharScalarFieldEnum
    having?: CharScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharCountAggregateInputType | true
    _avg?: CharAvgAggregateInputType
    _sum?: CharSumAggregateInputType
    _min?: CharMinAggregateInputType
    _max?: CharMaxAggregateInputType
  }

  export type CharGroupByOutputType = {
    id: number
    name: string
    img: string
    _count: CharCountAggregateOutputType | null
    _avg: CharAvgAggregateOutputType | null
    _sum: CharSumAggregateOutputType | null
    _min: CharMinAggregateOutputType | null
    _max: CharMaxAggregateOutputType | null
  }

  type GetCharGroupByPayload<T extends CharGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharGroupByOutputType[P]>
            : GetScalarType<T[P], CharGroupByOutputType[P]>
        }
      >
    >


  export type CharSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    img?: boolean
    Cords?: boolean | Char$CordsArgs<ExtArgs>
    _count?: boolean | CharCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["char"]>

  export type CharSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    img?: boolean
  }, ExtArgs["result"]["char"]>

  export type CharSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    img?: boolean
  }, ExtArgs["result"]["char"]>

  export type CharSelectScalar = {
    id?: boolean
    name?: boolean
    img?: boolean
  }

  export type CharOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "img", ExtArgs["result"]["char"]>
  export type CharInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cords?: boolean | Char$CordsArgs<ExtArgs>
    _count?: boolean | CharCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CharIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CharIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CharPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Char"
    objects: {
      Cords: Prisma.$CordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      img: string
    }, ExtArgs["result"]["char"]>
    composites: {}
  }

  type CharGetPayload<S extends boolean | null | undefined | CharDefaultArgs> = $Result.GetResult<Prisma.$CharPayload, S>

  type CharCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharCountAggregateInputType | true
    }

  export interface CharDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Char'], meta: { name: 'Char' } }
    /**
     * Find zero or one Char that matches the filter.
     * @param {CharFindUniqueArgs} args - Arguments to find a Char
     * @example
     * // Get one Char
     * const char = await prisma.char.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharFindUniqueArgs>(args: SelectSubset<T, CharFindUniqueArgs<ExtArgs>>): Prisma__CharClient<$Result.GetResult<Prisma.$CharPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Char that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharFindUniqueOrThrowArgs} args - Arguments to find a Char
     * @example
     * // Get one Char
     * const char = await prisma.char.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharFindUniqueOrThrowArgs>(args: SelectSubset<T, CharFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharClient<$Result.GetResult<Prisma.$CharPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Char that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharFindFirstArgs} args - Arguments to find a Char
     * @example
     * // Get one Char
     * const char = await prisma.char.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharFindFirstArgs>(args?: SelectSubset<T, CharFindFirstArgs<ExtArgs>>): Prisma__CharClient<$Result.GetResult<Prisma.$CharPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Char that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharFindFirstOrThrowArgs} args - Arguments to find a Char
     * @example
     * // Get one Char
     * const char = await prisma.char.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharFindFirstOrThrowArgs>(args?: SelectSubset<T, CharFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharClient<$Result.GetResult<Prisma.$CharPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chars
     * const chars = await prisma.char.findMany()
     * 
     * // Get first 10 Chars
     * const chars = await prisma.char.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const charWithIdOnly = await prisma.char.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharFindManyArgs>(args?: SelectSubset<T, CharFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Char.
     * @param {CharCreateArgs} args - Arguments to create a Char.
     * @example
     * // Create one Char
     * const Char = await prisma.char.create({
     *   data: {
     *     // ... data to create a Char
     *   }
     * })
     * 
     */
    create<T extends CharCreateArgs>(args: SelectSubset<T, CharCreateArgs<ExtArgs>>): Prisma__CharClient<$Result.GetResult<Prisma.$CharPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chars.
     * @param {CharCreateManyArgs} args - Arguments to create many Chars.
     * @example
     * // Create many Chars
     * const char = await prisma.char.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharCreateManyArgs>(args?: SelectSubset<T, CharCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chars and returns the data saved in the database.
     * @param {CharCreateManyAndReturnArgs} args - Arguments to create many Chars.
     * @example
     * // Create many Chars
     * const char = await prisma.char.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chars and only return the `id`
     * const charWithIdOnly = await prisma.char.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharCreateManyAndReturnArgs>(args?: SelectSubset<T, CharCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Char.
     * @param {CharDeleteArgs} args - Arguments to delete one Char.
     * @example
     * // Delete one Char
     * const Char = await prisma.char.delete({
     *   where: {
     *     // ... filter to delete one Char
     *   }
     * })
     * 
     */
    delete<T extends CharDeleteArgs>(args: SelectSubset<T, CharDeleteArgs<ExtArgs>>): Prisma__CharClient<$Result.GetResult<Prisma.$CharPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Char.
     * @param {CharUpdateArgs} args - Arguments to update one Char.
     * @example
     * // Update one Char
     * const char = await prisma.char.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharUpdateArgs>(args: SelectSubset<T, CharUpdateArgs<ExtArgs>>): Prisma__CharClient<$Result.GetResult<Prisma.$CharPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chars.
     * @param {CharDeleteManyArgs} args - Arguments to filter Chars to delete.
     * @example
     * // Delete a few Chars
     * const { count } = await prisma.char.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharDeleteManyArgs>(args?: SelectSubset<T, CharDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chars
     * const char = await prisma.char.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharUpdateManyArgs>(args: SelectSubset<T, CharUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chars and returns the data updated in the database.
     * @param {CharUpdateManyAndReturnArgs} args - Arguments to update many Chars.
     * @example
     * // Update many Chars
     * const char = await prisma.char.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chars and only return the `id`
     * const charWithIdOnly = await prisma.char.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CharUpdateManyAndReturnArgs>(args: SelectSubset<T, CharUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Char.
     * @param {CharUpsertArgs} args - Arguments to update or create a Char.
     * @example
     * // Update or create a Char
     * const char = await prisma.char.upsert({
     *   create: {
     *     // ... data to create a Char
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Char we want to update
     *   }
     * })
     */
    upsert<T extends CharUpsertArgs>(args: SelectSubset<T, CharUpsertArgs<ExtArgs>>): Prisma__CharClient<$Result.GetResult<Prisma.$CharPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharCountArgs} args - Arguments to filter Chars to count.
     * @example
     * // Count the number of Chars
     * const count = await prisma.char.count({
     *   where: {
     *     // ... the filter for the Chars we want to count
     *   }
     * })
    **/
    count<T extends CharCountArgs>(
      args?: Subset<T, CharCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Char.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharAggregateArgs>(args: Subset<T, CharAggregateArgs>): Prisma.PrismaPromise<GetCharAggregateType<T>>

    /**
     * Group by Char.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharGroupByArgs['orderBy'] }
        : { orderBy?: CharGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Char model
   */
  readonly fields: CharFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Char.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Cords<T extends Char$CordsArgs<ExtArgs> = {}>(args?: Subset<T, Char$CordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Char model
   */
  interface CharFieldRefs {
    readonly id: FieldRef<"Char", 'Int'>
    readonly name: FieldRef<"Char", 'String'>
    readonly img: FieldRef<"Char", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Char findUnique
   */
  export type CharFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Char
     */
    select?: CharSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Char
     */
    omit?: CharOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharInclude<ExtArgs> | null
    /**
     * Filter, which Char to fetch.
     */
    where: CharWhereUniqueInput
  }

  /**
   * Char findUniqueOrThrow
   */
  export type CharFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Char
     */
    select?: CharSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Char
     */
    omit?: CharOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharInclude<ExtArgs> | null
    /**
     * Filter, which Char to fetch.
     */
    where: CharWhereUniqueInput
  }

  /**
   * Char findFirst
   */
  export type CharFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Char
     */
    select?: CharSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Char
     */
    omit?: CharOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharInclude<ExtArgs> | null
    /**
     * Filter, which Char to fetch.
     */
    where?: CharWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chars to fetch.
     */
    orderBy?: CharOrderByWithRelationInput | CharOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chars.
     */
    cursor?: CharWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chars.
     */
    distinct?: CharScalarFieldEnum | CharScalarFieldEnum[]
  }

  /**
   * Char findFirstOrThrow
   */
  export type CharFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Char
     */
    select?: CharSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Char
     */
    omit?: CharOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharInclude<ExtArgs> | null
    /**
     * Filter, which Char to fetch.
     */
    where?: CharWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chars to fetch.
     */
    orderBy?: CharOrderByWithRelationInput | CharOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chars.
     */
    cursor?: CharWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chars.
     */
    distinct?: CharScalarFieldEnum | CharScalarFieldEnum[]
  }

  /**
   * Char findMany
   */
  export type CharFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Char
     */
    select?: CharSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Char
     */
    omit?: CharOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharInclude<ExtArgs> | null
    /**
     * Filter, which Chars to fetch.
     */
    where?: CharWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chars to fetch.
     */
    orderBy?: CharOrderByWithRelationInput | CharOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chars.
     */
    cursor?: CharWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chars.
     */
    skip?: number
    distinct?: CharScalarFieldEnum | CharScalarFieldEnum[]
  }

  /**
   * Char create
   */
  export type CharCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Char
     */
    select?: CharSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Char
     */
    omit?: CharOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharInclude<ExtArgs> | null
    /**
     * The data needed to create a Char.
     */
    data: XOR<CharCreateInput, CharUncheckedCreateInput>
  }

  /**
   * Char createMany
   */
  export type CharCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chars.
     */
    data: CharCreateManyInput | CharCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Char createManyAndReturn
   */
  export type CharCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Char
     */
    select?: CharSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Char
     */
    omit?: CharOmit<ExtArgs> | null
    /**
     * The data used to create many Chars.
     */
    data: CharCreateManyInput | CharCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Char update
   */
  export type CharUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Char
     */
    select?: CharSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Char
     */
    omit?: CharOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharInclude<ExtArgs> | null
    /**
     * The data needed to update a Char.
     */
    data: XOR<CharUpdateInput, CharUncheckedUpdateInput>
    /**
     * Choose, which Char to update.
     */
    where: CharWhereUniqueInput
  }

  /**
   * Char updateMany
   */
  export type CharUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chars.
     */
    data: XOR<CharUpdateManyMutationInput, CharUncheckedUpdateManyInput>
    /**
     * Filter which Chars to update
     */
    where?: CharWhereInput
    /**
     * Limit how many Chars to update.
     */
    limit?: number
  }

  /**
   * Char updateManyAndReturn
   */
  export type CharUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Char
     */
    select?: CharSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Char
     */
    omit?: CharOmit<ExtArgs> | null
    /**
     * The data used to update Chars.
     */
    data: XOR<CharUpdateManyMutationInput, CharUncheckedUpdateManyInput>
    /**
     * Filter which Chars to update
     */
    where?: CharWhereInput
    /**
     * Limit how many Chars to update.
     */
    limit?: number
  }

  /**
   * Char upsert
   */
  export type CharUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Char
     */
    select?: CharSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Char
     */
    omit?: CharOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharInclude<ExtArgs> | null
    /**
     * The filter to search for the Char to update in case it exists.
     */
    where: CharWhereUniqueInput
    /**
     * In case the Char found by the `where` argument doesn't exist, create a new Char with this data.
     */
    create: XOR<CharCreateInput, CharUncheckedCreateInput>
    /**
     * In case the Char was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharUpdateInput, CharUncheckedUpdateInput>
  }

  /**
   * Char delete
   */
  export type CharDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Char
     */
    select?: CharSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Char
     */
    omit?: CharOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharInclude<ExtArgs> | null
    /**
     * Filter which Char to delete.
     */
    where: CharWhereUniqueInput
  }

  /**
   * Char deleteMany
   */
  export type CharDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chars to delete
     */
    where?: CharWhereInput
    /**
     * Limit how many Chars to delete.
     */
    limit?: number
  }

  /**
   * Char.Cords
   */
  export type Char$CordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cord
     */
    select?: CordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cord
     */
    omit?: CordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CordInclude<ExtArgs> | null
    where?: CordWhereInput
    orderBy?: CordOrderByWithRelationInput | CordOrderByWithRelationInput[]
    cursor?: CordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CordScalarFieldEnum | CordScalarFieldEnum[]
  }

  /**
   * Char without action
   */
  export type CharDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Char
     */
    select?: CharSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Char
     */
    omit?: CharOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharInclude<ExtArgs> | null
  }


  /**
   * Model Cord
   */

  export type AggregateCord = {
    _count: CordCountAggregateOutputType | null
    _avg: CordAvgAggregateOutputType | null
    _sum: CordSumAggregateOutputType | null
    _min: CordMinAggregateOutputType | null
    _max: CordMaxAggregateOutputType | null
  }

  export type CordAvgAggregateOutputType = {
    id: number | null
    x_min: Decimal | null
    x_max: Decimal | null
    y_min: Decimal | null
    y_max: Decimal | null
    char_id: number | null
    setting_id: number | null
  }

  export type CordSumAggregateOutputType = {
    id: number | null
    x_min: Decimal | null
    x_max: Decimal | null
    y_min: Decimal | null
    y_max: Decimal | null
    char_id: number | null
    setting_id: number | null
  }

  export type CordMinAggregateOutputType = {
    id: number | null
    x_min: Decimal | null
    x_max: Decimal | null
    y_min: Decimal | null
    y_max: Decimal | null
    char_id: number | null
    setting_id: number | null
  }

  export type CordMaxAggregateOutputType = {
    id: number | null
    x_min: Decimal | null
    x_max: Decimal | null
    y_min: Decimal | null
    y_max: Decimal | null
    char_id: number | null
    setting_id: number | null
  }

  export type CordCountAggregateOutputType = {
    id: number
    x_min: number
    x_max: number
    y_min: number
    y_max: number
    char_id: number
    setting_id: number
    _all: number
  }


  export type CordAvgAggregateInputType = {
    id?: true
    x_min?: true
    x_max?: true
    y_min?: true
    y_max?: true
    char_id?: true
    setting_id?: true
  }

  export type CordSumAggregateInputType = {
    id?: true
    x_min?: true
    x_max?: true
    y_min?: true
    y_max?: true
    char_id?: true
    setting_id?: true
  }

  export type CordMinAggregateInputType = {
    id?: true
    x_min?: true
    x_max?: true
    y_min?: true
    y_max?: true
    char_id?: true
    setting_id?: true
  }

  export type CordMaxAggregateInputType = {
    id?: true
    x_min?: true
    x_max?: true
    y_min?: true
    y_max?: true
    char_id?: true
    setting_id?: true
  }

  export type CordCountAggregateInputType = {
    id?: true
    x_min?: true
    x_max?: true
    y_min?: true
    y_max?: true
    char_id?: true
    setting_id?: true
    _all?: true
  }

  export type CordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cord to aggregate.
     */
    where?: CordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cords to fetch.
     */
    orderBy?: CordOrderByWithRelationInput | CordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cords
    **/
    _count?: true | CordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CordMaxAggregateInputType
  }

  export type GetCordAggregateType<T extends CordAggregateArgs> = {
        [P in keyof T & keyof AggregateCord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCord[P]>
      : GetScalarType<T[P], AggregateCord[P]>
  }




  export type CordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CordWhereInput
    orderBy?: CordOrderByWithAggregationInput | CordOrderByWithAggregationInput[]
    by: CordScalarFieldEnum[] | CordScalarFieldEnum
    having?: CordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CordCountAggregateInputType | true
    _avg?: CordAvgAggregateInputType
    _sum?: CordSumAggregateInputType
    _min?: CordMinAggregateInputType
    _max?: CordMaxAggregateInputType
  }

  export type CordGroupByOutputType = {
    id: number
    x_min: Decimal
    x_max: Decimal
    y_min: Decimal
    y_max: Decimal
    char_id: number
    setting_id: number
    _count: CordCountAggregateOutputType | null
    _avg: CordAvgAggregateOutputType | null
    _sum: CordSumAggregateOutputType | null
    _min: CordMinAggregateOutputType | null
    _max: CordMaxAggregateOutputType | null
  }

  type GetCordGroupByPayload<T extends CordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CordGroupByOutputType[P]>
            : GetScalarType<T[P], CordGroupByOutputType[P]>
        }
      >
    >


  export type CordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x_min?: boolean
    x_max?: boolean
    y_min?: boolean
    y_max?: boolean
    char_id?: boolean
    setting_id?: boolean
    char?: boolean | CharDefaultArgs<ExtArgs>
    setting?: boolean | SettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cord"]>

  export type CordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x_min?: boolean
    x_max?: boolean
    y_min?: boolean
    y_max?: boolean
    char_id?: boolean
    setting_id?: boolean
    char?: boolean | CharDefaultArgs<ExtArgs>
    setting?: boolean | SettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cord"]>

  export type CordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x_min?: boolean
    x_max?: boolean
    y_min?: boolean
    y_max?: boolean
    char_id?: boolean
    setting_id?: boolean
    char?: boolean | CharDefaultArgs<ExtArgs>
    setting?: boolean | SettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cord"]>

  export type CordSelectScalar = {
    id?: boolean
    x_min?: boolean
    x_max?: boolean
    y_min?: boolean
    y_max?: boolean
    char_id?: boolean
    setting_id?: boolean
  }

  export type CordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "x_min" | "x_max" | "y_min" | "y_max" | "char_id" | "setting_id", ExtArgs["result"]["cord"]>
  export type CordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    char?: boolean | CharDefaultArgs<ExtArgs>
    setting?: boolean | SettingDefaultArgs<ExtArgs>
  }
  export type CordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    char?: boolean | CharDefaultArgs<ExtArgs>
    setting?: boolean | SettingDefaultArgs<ExtArgs>
  }
  export type CordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    char?: boolean | CharDefaultArgs<ExtArgs>
    setting?: boolean | SettingDefaultArgs<ExtArgs>
  }

  export type $CordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cord"
    objects: {
      char: Prisma.$CharPayload<ExtArgs>
      setting: Prisma.$SettingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      x_min: Prisma.Decimal
      x_max: Prisma.Decimal
      y_min: Prisma.Decimal
      y_max: Prisma.Decimal
      char_id: number
      setting_id: number
    }, ExtArgs["result"]["cord"]>
    composites: {}
  }

  type CordGetPayload<S extends boolean | null | undefined | CordDefaultArgs> = $Result.GetResult<Prisma.$CordPayload, S>

  type CordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CordCountAggregateInputType | true
    }

  export interface CordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cord'], meta: { name: 'Cord' } }
    /**
     * Find zero or one Cord that matches the filter.
     * @param {CordFindUniqueArgs} args - Arguments to find a Cord
     * @example
     * // Get one Cord
     * const cord = await prisma.cord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CordFindUniqueArgs>(args: SelectSubset<T, CordFindUniqueArgs<ExtArgs>>): Prisma__CordClient<$Result.GetResult<Prisma.$CordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CordFindUniqueOrThrowArgs} args - Arguments to find a Cord
     * @example
     * // Get one Cord
     * const cord = await prisma.cord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CordFindUniqueOrThrowArgs>(args: SelectSubset<T, CordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CordClient<$Result.GetResult<Prisma.$CordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CordFindFirstArgs} args - Arguments to find a Cord
     * @example
     * // Get one Cord
     * const cord = await prisma.cord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CordFindFirstArgs>(args?: SelectSubset<T, CordFindFirstArgs<ExtArgs>>): Prisma__CordClient<$Result.GetResult<Prisma.$CordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CordFindFirstOrThrowArgs} args - Arguments to find a Cord
     * @example
     * // Get one Cord
     * const cord = await prisma.cord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CordFindFirstOrThrowArgs>(args?: SelectSubset<T, CordFindFirstOrThrowArgs<ExtArgs>>): Prisma__CordClient<$Result.GetResult<Prisma.$CordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cords
     * const cords = await prisma.cord.findMany()
     * 
     * // Get first 10 Cords
     * const cords = await prisma.cord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cordWithIdOnly = await prisma.cord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CordFindManyArgs>(args?: SelectSubset<T, CordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cord.
     * @param {CordCreateArgs} args - Arguments to create a Cord.
     * @example
     * // Create one Cord
     * const Cord = await prisma.cord.create({
     *   data: {
     *     // ... data to create a Cord
     *   }
     * })
     * 
     */
    create<T extends CordCreateArgs>(args: SelectSubset<T, CordCreateArgs<ExtArgs>>): Prisma__CordClient<$Result.GetResult<Prisma.$CordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cords.
     * @param {CordCreateManyArgs} args - Arguments to create many Cords.
     * @example
     * // Create many Cords
     * const cord = await prisma.cord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CordCreateManyArgs>(args?: SelectSubset<T, CordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cords and returns the data saved in the database.
     * @param {CordCreateManyAndReturnArgs} args - Arguments to create many Cords.
     * @example
     * // Create many Cords
     * const cord = await prisma.cord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cords and only return the `id`
     * const cordWithIdOnly = await prisma.cord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CordCreateManyAndReturnArgs>(args?: SelectSubset<T, CordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cord.
     * @param {CordDeleteArgs} args - Arguments to delete one Cord.
     * @example
     * // Delete one Cord
     * const Cord = await prisma.cord.delete({
     *   where: {
     *     // ... filter to delete one Cord
     *   }
     * })
     * 
     */
    delete<T extends CordDeleteArgs>(args: SelectSubset<T, CordDeleteArgs<ExtArgs>>): Prisma__CordClient<$Result.GetResult<Prisma.$CordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cord.
     * @param {CordUpdateArgs} args - Arguments to update one Cord.
     * @example
     * // Update one Cord
     * const cord = await prisma.cord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CordUpdateArgs>(args: SelectSubset<T, CordUpdateArgs<ExtArgs>>): Prisma__CordClient<$Result.GetResult<Prisma.$CordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cords.
     * @param {CordDeleteManyArgs} args - Arguments to filter Cords to delete.
     * @example
     * // Delete a few Cords
     * const { count } = await prisma.cord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CordDeleteManyArgs>(args?: SelectSubset<T, CordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cords
     * const cord = await prisma.cord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CordUpdateManyArgs>(args: SelectSubset<T, CordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cords and returns the data updated in the database.
     * @param {CordUpdateManyAndReturnArgs} args - Arguments to update many Cords.
     * @example
     * // Update many Cords
     * const cord = await prisma.cord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cords and only return the `id`
     * const cordWithIdOnly = await prisma.cord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CordUpdateManyAndReturnArgs>(args: SelectSubset<T, CordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cord.
     * @param {CordUpsertArgs} args - Arguments to update or create a Cord.
     * @example
     * // Update or create a Cord
     * const cord = await prisma.cord.upsert({
     *   create: {
     *     // ... data to create a Cord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cord we want to update
     *   }
     * })
     */
    upsert<T extends CordUpsertArgs>(args: SelectSubset<T, CordUpsertArgs<ExtArgs>>): Prisma__CordClient<$Result.GetResult<Prisma.$CordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CordCountArgs} args - Arguments to filter Cords to count.
     * @example
     * // Count the number of Cords
     * const count = await prisma.cord.count({
     *   where: {
     *     // ... the filter for the Cords we want to count
     *   }
     * })
    **/
    count<T extends CordCountArgs>(
      args?: Subset<T, CordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CordAggregateArgs>(args: Subset<T, CordAggregateArgs>): Prisma.PrismaPromise<GetCordAggregateType<T>>

    /**
     * Group by Cord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CordGroupByArgs['orderBy'] }
        : { orderBy?: CordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cord model
   */
  readonly fields: CordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    char<T extends CharDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharDefaultArgs<ExtArgs>>): Prisma__CharClient<$Result.GetResult<Prisma.$CharPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    setting<T extends SettingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SettingDefaultArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cord model
   */
  interface CordFieldRefs {
    readonly id: FieldRef<"Cord", 'Int'>
    readonly x_min: FieldRef<"Cord", 'Decimal'>
    readonly x_max: FieldRef<"Cord", 'Decimal'>
    readonly y_min: FieldRef<"Cord", 'Decimal'>
    readonly y_max: FieldRef<"Cord", 'Decimal'>
    readonly char_id: FieldRef<"Cord", 'Int'>
    readonly setting_id: FieldRef<"Cord", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cord findUnique
   */
  export type CordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cord
     */
    select?: CordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cord
     */
    omit?: CordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CordInclude<ExtArgs> | null
    /**
     * Filter, which Cord to fetch.
     */
    where: CordWhereUniqueInput
  }

  /**
   * Cord findUniqueOrThrow
   */
  export type CordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cord
     */
    select?: CordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cord
     */
    omit?: CordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CordInclude<ExtArgs> | null
    /**
     * Filter, which Cord to fetch.
     */
    where: CordWhereUniqueInput
  }

  /**
   * Cord findFirst
   */
  export type CordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cord
     */
    select?: CordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cord
     */
    omit?: CordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CordInclude<ExtArgs> | null
    /**
     * Filter, which Cord to fetch.
     */
    where?: CordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cords to fetch.
     */
    orderBy?: CordOrderByWithRelationInput | CordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cords.
     */
    cursor?: CordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cords.
     */
    distinct?: CordScalarFieldEnum | CordScalarFieldEnum[]
  }

  /**
   * Cord findFirstOrThrow
   */
  export type CordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cord
     */
    select?: CordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cord
     */
    omit?: CordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CordInclude<ExtArgs> | null
    /**
     * Filter, which Cord to fetch.
     */
    where?: CordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cords to fetch.
     */
    orderBy?: CordOrderByWithRelationInput | CordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cords.
     */
    cursor?: CordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cords.
     */
    distinct?: CordScalarFieldEnum | CordScalarFieldEnum[]
  }

  /**
   * Cord findMany
   */
  export type CordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cord
     */
    select?: CordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cord
     */
    omit?: CordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CordInclude<ExtArgs> | null
    /**
     * Filter, which Cords to fetch.
     */
    where?: CordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cords to fetch.
     */
    orderBy?: CordOrderByWithRelationInput | CordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cords.
     */
    cursor?: CordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cords.
     */
    skip?: number
    distinct?: CordScalarFieldEnum | CordScalarFieldEnum[]
  }

  /**
   * Cord create
   */
  export type CordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cord
     */
    select?: CordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cord
     */
    omit?: CordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CordInclude<ExtArgs> | null
    /**
     * The data needed to create a Cord.
     */
    data: XOR<CordCreateInput, CordUncheckedCreateInput>
  }

  /**
   * Cord createMany
   */
  export type CordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cords.
     */
    data: CordCreateManyInput | CordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cord createManyAndReturn
   */
  export type CordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cord
     */
    select?: CordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cord
     */
    omit?: CordOmit<ExtArgs> | null
    /**
     * The data used to create many Cords.
     */
    data: CordCreateManyInput | CordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cord update
   */
  export type CordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cord
     */
    select?: CordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cord
     */
    omit?: CordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CordInclude<ExtArgs> | null
    /**
     * The data needed to update a Cord.
     */
    data: XOR<CordUpdateInput, CordUncheckedUpdateInput>
    /**
     * Choose, which Cord to update.
     */
    where: CordWhereUniqueInput
  }

  /**
   * Cord updateMany
   */
  export type CordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cords.
     */
    data: XOR<CordUpdateManyMutationInput, CordUncheckedUpdateManyInput>
    /**
     * Filter which Cords to update
     */
    where?: CordWhereInput
    /**
     * Limit how many Cords to update.
     */
    limit?: number
  }

  /**
   * Cord updateManyAndReturn
   */
  export type CordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cord
     */
    select?: CordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cord
     */
    omit?: CordOmit<ExtArgs> | null
    /**
     * The data used to update Cords.
     */
    data: XOR<CordUpdateManyMutationInput, CordUncheckedUpdateManyInput>
    /**
     * Filter which Cords to update
     */
    where?: CordWhereInput
    /**
     * Limit how many Cords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cord upsert
   */
  export type CordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cord
     */
    select?: CordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cord
     */
    omit?: CordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CordInclude<ExtArgs> | null
    /**
     * The filter to search for the Cord to update in case it exists.
     */
    where: CordWhereUniqueInput
    /**
     * In case the Cord found by the `where` argument doesn't exist, create a new Cord with this data.
     */
    create: XOR<CordCreateInput, CordUncheckedCreateInput>
    /**
     * In case the Cord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CordUpdateInput, CordUncheckedUpdateInput>
  }

  /**
   * Cord delete
   */
  export type CordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cord
     */
    select?: CordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cord
     */
    omit?: CordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CordInclude<ExtArgs> | null
    /**
     * Filter which Cord to delete.
     */
    where: CordWhereUniqueInput
  }

  /**
   * Cord deleteMany
   */
  export type CordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cords to delete
     */
    where?: CordWhereInput
    /**
     * Limit how many Cords to delete.
     */
    limit?: number
  }

  /**
   * Cord without action
   */
  export type CordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cord
     */
    select?: CordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cord
     */
    omit?: CordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CordInclude<ExtArgs> | null
  }


  /**
   * Model Score
   */

  export type AggregateScore = {
    _count: ScoreCountAggregateOutputType | null
    _avg: ScoreAvgAggregateOutputType | null
    _sum: ScoreSumAggregateOutputType | null
    _min: ScoreMinAggregateOutputType | null
    _max: ScoreMaxAggregateOutputType | null
  }

  export type ScoreAvgAggregateOutputType = {
    id: number | null
    seconds: Decimal | null
    setting_id: number | null
  }

  export type ScoreSumAggregateOutputType = {
    id: number | null
    seconds: Decimal | null
    setting_id: number | null
  }

  export type ScoreMinAggregateOutputType = {
    id: number | null
    seconds: Decimal | null
    username: string | null
    setting_id: number | null
  }

  export type ScoreMaxAggregateOutputType = {
    id: number | null
    seconds: Decimal | null
    username: string | null
    setting_id: number | null
  }

  export type ScoreCountAggregateOutputType = {
    id: number
    seconds: number
    username: number
    setting_id: number
    _all: number
  }


  export type ScoreAvgAggregateInputType = {
    id?: true
    seconds?: true
    setting_id?: true
  }

  export type ScoreSumAggregateInputType = {
    id?: true
    seconds?: true
    setting_id?: true
  }

  export type ScoreMinAggregateInputType = {
    id?: true
    seconds?: true
    username?: true
    setting_id?: true
  }

  export type ScoreMaxAggregateInputType = {
    id?: true
    seconds?: true
    username?: true
    setting_id?: true
  }

  export type ScoreCountAggregateInputType = {
    id?: true
    seconds?: true
    username?: true
    setting_id?: true
    _all?: true
  }

  export type ScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Score to aggregate.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scores
    **/
    _count?: true | ScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoreMaxAggregateInputType
  }

  export type GetScoreAggregateType<T extends ScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScore[P]>
      : GetScalarType<T[P], AggregateScore[P]>
  }




  export type ScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithAggregationInput | ScoreOrderByWithAggregationInput[]
    by: ScoreScalarFieldEnum[] | ScoreScalarFieldEnum
    having?: ScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoreCountAggregateInputType | true
    _avg?: ScoreAvgAggregateInputType
    _sum?: ScoreSumAggregateInputType
    _min?: ScoreMinAggregateInputType
    _max?: ScoreMaxAggregateInputType
  }

  export type ScoreGroupByOutputType = {
    id: number
    seconds: Decimal
    username: string
    setting_id: number
    _count: ScoreCountAggregateOutputType | null
    _avg: ScoreAvgAggregateOutputType | null
    _sum: ScoreSumAggregateOutputType | null
    _min: ScoreMinAggregateOutputType | null
    _max: ScoreMaxAggregateOutputType | null
  }

  type GetScoreGroupByPayload<T extends ScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoreGroupByOutputType[P]>
            : GetScalarType<T[P], ScoreGroupByOutputType[P]>
        }
      >
    >


  export type ScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seconds?: boolean
    username?: boolean
    setting_id?: boolean
    setting?: boolean | SettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seconds?: boolean
    username?: boolean
    setting_id?: boolean
    setting?: boolean | SettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seconds?: boolean
    username?: boolean
    setting_id?: boolean
    setting?: boolean | SettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectScalar = {
    id?: boolean
    seconds?: boolean
    username?: boolean
    setting_id?: boolean
  }

  export type ScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seconds" | "username" | "setting_id", ExtArgs["result"]["score"]>
  export type ScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setting?: boolean | SettingDefaultArgs<ExtArgs>
  }
  export type ScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setting?: boolean | SettingDefaultArgs<ExtArgs>
  }
  export type ScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setting?: boolean | SettingDefaultArgs<ExtArgs>
  }

  export type $ScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Score"
    objects: {
      setting: Prisma.$SettingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      seconds: Prisma.Decimal
      username: string
      setting_id: number
    }, ExtArgs["result"]["score"]>
    composites: {}
  }

  type ScoreGetPayload<S extends boolean | null | undefined | ScoreDefaultArgs> = $Result.GetResult<Prisma.$ScorePayload, S>

  type ScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScoreCountAggregateInputType | true
    }

  export interface ScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Score'], meta: { name: 'Score' } }
    /**
     * Find zero or one Score that matches the filter.
     * @param {ScoreFindUniqueArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScoreFindUniqueArgs>(args: SelectSubset<T, ScoreFindUniqueArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Score that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScoreFindUniqueOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, ScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Score that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindFirstArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScoreFindFirstArgs>(args?: SelectSubset<T, ScoreFindFirstArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Score that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindFirstOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, ScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scores
     * const scores = await prisma.score.findMany()
     * 
     * // Get first 10 Scores
     * const scores = await prisma.score.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoreWithIdOnly = await prisma.score.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScoreFindManyArgs>(args?: SelectSubset<T, ScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Score.
     * @param {ScoreCreateArgs} args - Arguments to create a Score.
     * @example
     * // Create one Score
     * const Score = await prisma.score.create({
     *   data: {
     *     // ... data to create a Score
     *   }
     * })
     * 
     */
    create<T extends ScoreCreateArgs>(args: SelectSubset<T, ScoreCreateArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scores.
     * @param {ScoreCreateManyArgs} args - Arguments to create many Scores.
     * @example
     * // Create many Scores
     * const score = await prisma.score.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScoreCreateManyArgs>(args?: SelectSubset<T, ScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scores and returns the data saved in the database.
     * @param {ScoreCreateManyAndReturnArgs} args - Arguments to create many Scores.
     * @example
     * // Create many Scores
     * const score = await prisma.score.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scores and only return the `id`
     * const scoreWithIdOnly = await prisma.score.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, ScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Score.
     * @param {ScoreDeleteArgs} args - Arguments to delete one Score.
     * @example
     * // Delete one Score
     * const Score = await prisma.score.delete({
     *   where: {
     *     // ... filter to delete one Score
     *   }
     * })
     * 
     */
    delete<T extends ScoreDeleteArgs>(args: SelectSubset<T, ScoreDeleteArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Score.
     * @param {ScoreUpdateArgs} args - Arguments to update one Score.
     * @example
     * // Update one Score
     * const score = await prisma.score.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScoreUpdateArgs>(args: SelectSubset<T, ScoreUpdateArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scores.
     * @param {ScoreDeleteManyArgs} args - Arguments to filter Scores to delete.
     * @example
     * // Delete a few Scores
     * const { count } = await prisma.score.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScoreDeleteManyArgs>(args?: SelectSubset<T, ScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scores
     * const score = await prisma.score.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScoreUpdateManyArgs>(args: SelectSubset<T, ScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scores and returns the data updated in the database.
     * @param {ScoreUpdateManyAndReturnArgs} args - Arguments to update many Scores.
     * @example
     * // Update many Scores
     * const score = await prisma.score.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scores and only return the `id`
     * const scoreWithIdOnly = await prisma.score.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, ScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Score.
     * @param {ScoreUpsertArgs} args - Arguments to update or create a Score.
     * @example
     * // Update or create a Score
     * const score = await prisma.score.upsert({
     *   create: {
     *     // ... data to create a Score
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Score we want to update
     *   }
     * })
     */
    upsert<T extends ScoreUpsertArgs>(args: SelectSubset<T, ScoreUpsertArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreCountArgs} args - Arguments to filter Scores to count.
     * @example
     * // Count the number of Scores
     * const count = await prisma.score.count({
     *   where: {
     *     // ... the filter for the Scores we want to count
     *   }
     * })
    **/
    count<T extends ScoreCountArgs>(
      args?: Subset<T, ScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Score.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScoreAggregateArgs>(args: Subset<T, ScoreAggregateArgs>): Prisma.PrismaPromise<GetScoreAggregateType<T>>

    /**
     * Group by Score.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoreGroupByArgs['orderBy'] }
        : { orderBy?: ScoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Score model
   */
  readonly fields: ScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Score.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    setting<T extends SettingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SettingDefaultArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Score model
   */
  interface ScoreFieldRefs {
    readonly id: FieldRef<"Score", 'Int'>
    readonly seconds: FieldRef<"Score", 'Decimal'>
    readonly username: FieldRef<"Score", 'String'>
    readonly setting_id: FieldRef<"Score", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Score findUnique
   */
  export type ScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score findUniqueOrThrow
   */
  export type ScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score findFirst
   */
  export type ScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score findFirstOrThrow
   */
  export type ScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score findMany
   */
  export type ScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Scores to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score create
   */
  export type ScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Score.
     */
    data: XOR<ScoreCreateInput, ScoreUncheckedCreateInput>
  }

  /**
   * Score createMany
   */
  export type ScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scores.
     */
    data: ScoreCreateManyInput | ScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Score createManyAndReturn
   */
  export type ScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * The data used to create many Scores.
     */
    data: ScoreCreateManyInput | ScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Score update
   */
  export type ScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Score.
     */
    data: XOR<ScoreUpdateInput, ScoreUncheckedUpdateInput>
    /**
     * Choose, which Score to update.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score updateMany
   */
  export type ScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scores.
     */
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyInput>
    /**
     * Filter which Scores to update
     */
    where?: ScoreWhereInput
    /**
     * Limit how many Scores to update.
     */
    limit?: number
  }

  /**
   * Score updateManyAndReturn
   */
  export type ScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * The data used to update Scores.
     */
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyInput>
    /**
     * Filter which Scores to update
     */
    where?: ScoreWhereInput
    /**
     * Limit how many Scores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Score upsert
   */
  export type ScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Score to update in case it exists.
     */
    where: ScoreWhereUniqueInput
    /**
     * In case the Score found by the `where` argument doesn't exist, create a new Score with this data.
     */
    create: XOR<ScoreCreateInput, ScoreUncheckedCreateInput>
    /**
     * In case the Score was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoreUpdateInput, ScoreUncheckedUpdateInput>
  }

  /**
   * Score delete
   */
  export type ScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter which Score to delete.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score deleteMany
   */
  export type ScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scores to delete
     */
    where?: ScoreWhereInput
    /**
     * Limit how many Scores to delete.
     */
    limit?: number
  }

  /**
   * Score without action
   */
  export type ScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SettingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    img: 'img'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const CharScalarFieldEnum: {
    id: 'id',
    name: 'name',
    img: 'img'
  };

  export type CharScalarFieldEnum = (typeof CharScalarFieldEnum)[keyof typeof CharScalarFieldEnum]


  export const CordScalarFieldEnum: {
    id: 'id',
    x_min: 'x_min',
    x_max: 'x_max',
    y_min: 'y_min',
    y_max: 'y_max',
    char_id: 'char_id',
    setting_id: 'setting_id'
  };

  export type CordScalarFieldEnum = (typeof CordScalarFieldEnum)[keyof typeof CordScalarFieldEnum]


  export const ScoreScalarFieldEnum: {
    id: 'id',
    seconds: 'seconds',
    username: 'username',
    setting_id: 'setting_id'
  };

  export type ScoreScalarFieldEnum = (typeof ScoreScalarFieldEnum)[keyof typeof ScoreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    id?: IntFilter<"Setting"> | number
    name?: StringFilter<"Setting"> | string
    img?: StringFilter<"Setting"> | string
    Cords?: CordListRelationFilter
    Scores?: ScoreListRelationFilter
  }

  export type SettingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
    Cords?: CordOrderByRelationAggregateInput
    Scores?: ScoreOrderByRelationAggregateInput
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    name?: StringFilter<"Setting"> | string
    img?: StringFilter<"Setting"> | string
    Cords?: CordListRelationFilter
    Scores?: ScoreListRelationFilter
  }, "id">

  export type SettingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
    _count?: SettingCountOrderByAggregateInput
    _avg?: SettingAvgOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
    _sum?: SettingSumOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Setting"> | number
    name?: StringWithAggregatesFilter<"Setting"> | string
    img?: StringWithAggregatesFilter<"Setting"> | string
  }

  export type CharWhereInput = {
    AND?: CharWhereInput | CharWhereInput[]
    OR?: CharWhereInput[]
    NOT?: CharWhereInput | CharWhereInput[]
    id?: IntFilter<"Char"> | number
    name?: StringFilter<"Char"> | string
    img?: StringFilter<"Char"> | string
    Cords?: CordListRelationFilter
  }

  export type CharOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
    Cords?: CordOrderByRelationAggregateInput
  }

  export type CharWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CharWhereInput | CharWhereInput[]
    OR?: CharWhereInput[]
    NOT?: CharWhereInput | CharWhereInput[]
    name?: StringFilter<"Char"> | string
    img?: StringFilter<"Char"> | string
    Cords?: CordListRelationFilter
  }, "id">

  export type CharOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
    _count?: CharCountOrderByAggregateInput
    _avg?: CharAvgOrderByAggregateInput
    _max?: CharMaxOrderByAggregateInput
    _min?: CharMinOrderByAggregateInput
    _sum?: CharSumOrderByAggregateInput
  }

  export type CharScalarWhereWithAggregatesInput = {
    AND?: CharScalarWhereWithAggregatesInput | CharScalarWhereWithAggregatesInput[]
    OR?: CharScalarWhereWithAggregatesInput[]
    NOT?: CharScalarWhereWithAggregatesInput | CharScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Char"> | number
    name?: StringWithAggregatesFilter<"Char"> | string
    img?: StringWithAggregatesFilter<"Char"> | string
  }

  export type CordWhereInput = {
    AND?: CordWhereInput | CordWhereInput[]
    OR?: CordWhereInput[]
    NOT?: CordWhereInput | CordWhereInput[]
    id?: IntFilter<"Cord"> | number
    x_min?: DecimalFilter<"Cord"> | Decimal | DecimalJsLike | number | string
    x_max?: DecimalFilter<"Cord"> | Decimal | DecimalJsLike | number | string
    y_min?: DecimalFilter<"Cord"> | Decimal | DecimalJsLike | number | string
    y_max?: DecimalFilter<"Cord"> | Decimal | DecimalJsLike | number | string
    char_id?: IntFilter<"Cord"> | number
    setting_id?: IntFilter<"Cord"> | number
    char?: XOR<CharScalarRelationFilter, CharWhereInput>
    setting?: XOR<SettingScalarRelationFilter, SettingWhereInput>
  }

  export type CordOrderByWithRelationInput = {
    id?: SortOrder
    x_min?: SortOrder
    x_max?: SortOrder
    y_min?: SortOrder
    y_max?: SortOrder
    char_id?: SortOrder
    setting_id?: SortOrder
    char?: CharOrderByWithRelationInput
    setting?: SettingOrderByWithRelationInput
  }

  export type CordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CordWhereInput | CordWhereInput[]
    OR?: CordWhereInput[]
    NOT?: CordWhereInput | CordWhereInput[]
    x_min?: DecimalFilter<"Cord"> | Decimal | DecimalJsLike | number | string
    x_max?: DecimalFilter<"Cord"> | Decimal | DecimalJsLike | number | string
    y_min?: DecimalFilter<"Cord"> | Decimal | DecimalJsLike | number | string
    y_max?: DecimalFilter<"Cord"> | Decimal | DecimalJsLike | number | string
    char_id?: IntFilter<"Cord"> | number
    setting_id?: IntFilter<"Cord"> | number
    char?: XOR<CharScalarRelationFilter, CharWhereInput>
    setting?: XOR<SettingScalarRelationFilter, SettingWhereInput>
  }, "id">

  export type CordOrderByWithAggregationInput = {
    id?: SortOrder
    x_min?: SortOrder
    x_max?: SortOrder
    y_min?: SortOrder
    y_max?: SortOrder
    char_id?: SortOrder
    setting_id?: SortOrder
    _count?: CordCountOrderByAggregateInput
    _avg?: CordAvgOrderByAggregateInput
    _max?: CordMaxOrderByAggregateInput
    _min?: CordMinOrderByAggregateInput
    _sum?: CordSumOrderByAggregateInput
  }

  export type CordScalarWhereWithAggregatesInput = {
    AND?: CordScalarWhereWithAggregatesInput | CordScalarWhereWithAggregatesInput[]
    OR?: CordScalarWhereWithAggregatesInput[]
    NOT?: CordScalarWhereWithAggregatesInput | CordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cord"> | number
    x_min?: DecimalWithAggregatesFilter<"Cord"> | Decimal | DecimalJsLike | number | string
    x_max?: DecimalWithAggregatesFilter<"Cord"> | Decimal | DecimalJsLike | number | string
    y_min?: DecimalWithAggregatesFilter<"Cord"> | Decimal | DecimalJsLike | number | string
    y_max?: DecimalWithAggregatesFilter<"Cord"> | Decimal | DecimalJsLike | number | string
    char_id?: IntWithAggregatesFilter<"Cord"> | number
    setting_id?: IntWithAggregatesFilter<"Cord"> | number
  }

  export type ScoreWhereInput = {
    AND?: ScoreWhereInput | ScoreWhereInput[]
    OR?: ScoreWhereInput[]
    NOT?: ScoreWhereInput | ScoreWhereInput[]
    id?: IntFilter<"Score"> | number
    seconds?: DecimalFilter<"Score"> | Decimal | DecimalJsLike | number | string
    username?: StringFilter<"Score"> | string
    setting_id?: IntFilter<"Score"> | number
    setting?: XOR<SettingScalarRelationFilter, SettingWhereInput>
  }

  export type ScoreOrderByWithRelationInput = {
    id?: SortOrder
    seconds?: SortOrder
    username?: SortOrder
    setting_id?: SortOrder
    setting?: SettingOrderByWithRelationInput
  }

  export type ScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScoreWhereInput | ScoreWhereInput[]
    OR?: ScoreWhereInput[]
    NOT?: ScoreWhereInput | ScoreWhereInput[]
    seconds?: DecimalFilter<"Score"> | Decimal | DecimalJsLike | number | string
    username?: StringFilter<"Score"> | string
    setting_id?: IntFilter<"Score"> | number
    setting?: XOR<SettingScalarRelationFilter, SettingWhereInput>
  }, "id">

  export type ScoreOrderByWithAggregationInput = {
    id?: SortOrder
    seconds?: SortOrder
    username?: SortOrder
    setting_id?: SortOrder
    _count?: ScoreCountOrderByAggregateInput
    _avg?: ScoreAvgOrderByAggregateInput
    _max?: ScoreMaxOrderByAggregateInput
    _min?: ScoreMinOrderByAggregateInput
    _sum?: ScoreSumOrderByAggregateInput
  }

  export type ScoreScalarWhereWithAggregatesInput = {
    AND?: ScoreScalarWhereWithAggregatesInput | ScoreScalarWhereWithAggregatesInput[]
    OR?: ScoreScalarWhereWithAggregatesInput[]
    NOT?: ScoreScalarWhereWithAggregatesInput | ScoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Score"> | number
    seconds?: DecimalWithAggregatesFilter<"Score"> | Decimal | DecimalJsLike | number | string
    username?: StringWithAggregatesFilter<"Score"> | string
    setting_id?: IntWithAggregatesFilter<"Score"> | number
  }

  export type SettingCreateInput = {
    name: string
    img: string
    Cords?: CordCreateNestedManyWithoutSettingInput
    Scores?: ScoreCreateNestedManyWithoutSettingInput
  }

  export type SettingUncheckedCreateInput = {
    id?: number
    name: string
    img: string
    Cords?: CordUncheckedCreateNestedManyWithoutSettingInput
    Scores?: ScoreUncheckedCreateNestedManyWithoutSettingInput
  }

  export type SettingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    Cords?: CordUpdateManyWithoutSettingNestedInput
    Scores?: ScoreUpdateManyWithoutSettingNestedInput
  }

  export type SettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    Cords?: CordUncheckedUpdateManyWithoutSettingNestedInput
    Scores?: ScoreUncheckedUpdateManyWithoutSettingNestedInput
  }

  export type SettingCreateManyInput = {
    id?: number
    name: string
    img: string
  }

  export type SettingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type SettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type CharCreateInput = {
    name: string
    img: string
    Cords?: CordCreateNestedManyWithoutCharInput
  }

  export type CharUncheckedCreateInput = {
    id?: number
    name: string
    img: string
    Cords?: CordUncheckedCreateNestedManyWithoutCharInput
  }

  export type CharUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    Cords?: CordUpdateManyWithoutCharNestedInput
  }

  export type CharUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    Cords?: CordUncheckedUpdateManyWithoutCharNestedInput
  }

  export type CharCreateManyInput = {
    id?: number
    name: string
    img: string
  }

  export type CharUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type CharUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type CordCreateInput = {
    x_min: Decimal | DecimalJsLike | number | string
    x_max: Decimal | DecimalJsLike | number | string
    y_min: Decimal | DecimalJsLike | number | string
    y_max: Decimal | DecimalJsLike | number | string
    char: CharCreateNestedOneWithoutCordsInput
    setting: SettingCreateNestedOneWithoutCordsInput
  }

  export type CordUncheckedCreateInput = {
    id?: number
    x_min: Decimal | DecimalJsLike | number | string
    x_max: Decimal | DecimalJsLike | number | string
    y_min: Decimal | DecimalJsLike | number | string
    y_max: Decimal | DecimalJsLike | number | string
    char_id: number
    setting_id: number
  }

  export type CordUpdateInput = {
    x_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    x_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    char?: CharUpdateOneRequiredWithoutCordsNestedInput
    setting?: SettingUpdateOneRequiredWithoutCordsNestedInput
  }

  export type CordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    x_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    x_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    char_id?: IntFieldUpdateOperationsInput | number
    setting_id?: IntFieldUpdateOperationsInput | number
  }

  export type CordCreateManyInput = {
    id?: number
    x_min: Decimal | DecimalJsLike | number | string
    x_max: Decimal | DecimalJsLike | number | string
    y_min: Decimal | DecimalJsLike | number | string
    y_max: Decimal | DecimalJsLike | number | string
    char_id: number
    setting_id: number
  }

  export type CordUpdateManyMutationInput = {
    x_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    x_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    x_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    x_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    char_id?: IntFieldUpdateOperationsInput | number
    setting_id?: IntFieldUpdateOperationsInput | number
  }

  export type ScoreCreateInput = {
    seconds: Decimal | DecimalJsLike | number | string
    username: string
    setting: SettingCreateNestedOneWithoutScoresInput
  }

  export type ScoreUncheckedCreateInput = {
    id?: number
    seconds: Decimal | DecimalJsLike | number | string
    username: string
    setting_id: number
  }

  export type ScoreUpdateInput = {
    seconds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    username?: StringFieldUpdateOperationsInput | string
    setting?: SettingUpdateOneRequiredWithoutScoresNestedInput
  }

  export type ScoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    seconds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    username?: StringFieldUpdateOperationsInput | string
    setting_id?: IntFieldUpdateOperationsInput | number
  }

  export type ScoreCreateManyInput = {
    id?: number
    seconds: Decimal | DecimalJsLike | number | string
    username: string
    setting_id: number
  }

  export type ScoreUpdateManyMutationInput = {
    seconds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    seconds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    username?: StringFieldUpdateOperationsInput | string
    setting_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CordListRelationFilter = {
    every?: CordWhereInput
    some?: CordWhereInput
    none?: CordWhereInput
  }

  export type ScoreListRelationFilter = {
    every?: ScoreWhereInput
    some?: ScoreWhereInput
    none?: ScoreWhereInput
  }

  export type CordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SettingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
  }

  export type SettingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
  }

  export type SettingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CharCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
  }

  export type CharAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CharMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
  }

  export type CharMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
  }

  export type CharSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CharScalarRelationFilter = {
    is?: CharWhereInput
    isNot?: CharWhereInput
  }

  export type SettingScalarRelationFilter = {
    is?: SettingWhereInput
    isNot?: SettingWhereInput
  }

  export type CordCountOrderByAggregateInput = {
    id?: SortOrder
    x_min?: SortOrder
    x_max?: SortOrder
    y_min?: SortOrder
    y_max?: SortOrder
    char_id?: SortOrder
    setting_id?: SortOrder
  }

  export type CordAvgOrderByAggregateInput = {
    id?: SortOrder
    x_min?: SortOrder
    x_max?: SortOrder
    y_min?: SortOrder
    y_max?: SortOrder
    char_id?: SortOrder
    setting_id?: SortOrder
  }

  export type CordMaxOrderByAggregateInput = {
    id?: SortOrder
    x_min?: SortOrder
    x_max?: SortOrder
    y_min?: SortOrder
    y_max?: SortOrder
    char_id?: SortOrder
    setting_id?: SortOrder
  }

  export type CordMinOrderByAggregateInput = {
    id?: SortOrder
    x_min?: SortOrder
    x_max?: SortOrder
    y_min?: SortOrder
    y_max?: SortOrder
    char_id?: SortOrder
    setting_id?: SortOrder
  }

  export type CordSumOrderByAggregateInput = {
    id?: SortOrder
    x_min?: SortOrder
    x_max?: SortOrder
    y_min?: SortOrder
    y_max?: SortOrder
    char_id?: SortOrder
    setting_id?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ScoreCountOrderByAggregateInput = {
    id?: SortOrder
    seconds?: SortOrder
    username?: SortOrder
    setting_id?: SortOrder
  }

  export type ScoreAvgOrderByAggregateInput = {
    id?: SortOrder
    seconds?: SortOrder
    setting_id?: SortOrder
  }

  export type ScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    seconds?: SortOrder
    username?: SortOrder
    setting_id?: SortOrder
  }

  export type ScoreMinOrderByAggregateInput = {
    id?: SortOrder
    seconds?: SortOrder
    username?: SortOrder
    setting_id?: SortOrder
  }

  export type ScoreSumOrderByAggregateInput = {
    id?: SortOrder
    seconds?: SortOrder
    setting_id?: SortOrder
  }

  export type CordCreateNestedManyWithoutSettingInput = {
    create?: XOR<CordCreateWithoutSettingInput, CordUncheckedCreateWithoutSettingInput> | CordCreateWithoutSettingInput[] | CordUncheckedCreateWithoutSettingInput[]
    connectOrCreate?: CordCreateOrConnectWithoutSettingInput | CordCreateOrConnectWithoutSettingInput[]
    createMany?: CordCreateManySettingInputEnvelope
    connect?: CordWhereUniqueInput | CordWhereUniqueInput[]
  }

  export type ScoreCreateNestedManyWithoutSettingInput = {
    create?: XOR<ScoreCreateWithoutSettingInput, ScoreUncheckedCreateWithoutSettingInput> | ScoreCreateWithoutSettingInput[] | ScoreUncheckedCreateWithoutSettingInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutSettingInput | ScoreCreateOrConnectWithoutSettingInput[]
    createMany?: ScoreCreateManySettingInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type CordUncheckedCreateNestedManyWithoutSettingInput = {
    create?: XOR<CordCreateWithoutSettingInput, CordUncheckedCreateWithoutSettingInput> | CordCreateWithoutSettingInput[] | CordUncheckedCreateWithoutSettingInput[]
    connectOrCreate?: CordCreateOrConnectWithoutSettingInput | CordCreateOrConnectWithoutSettingInput[]
    createMany?: CordCreateManySettingInputEnvelope
    connect?: CordWhereUniqueInput | CordWhereUniqueInput[]
  }

  export type ScoreUncheckedCreateNestedManyWithoutSettingInput = {
    create?: XOR<ScoreCreateWithoutSettingInput, ScoreUncheckedCreateWithoutSettingInput> | ScoreCreateWithoutSettingInput[] | ScoreUncheckedCreateWithoutSettingInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutSettingInput | ScoreCreateOrConnectWithoutSettingInput[]
    createMany?: ScoreCreateManySettingInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CordUpdateManyWithoutSettingNestedInput = {
    create?: XOR<CordCreateWithoutSettingInput, CordUncheckedCreateWithoutSettingInput> | CordCreateWithoutSettingInput[] | CordUncheckedCreateWithoutSettingInput[]
    connectOrCreate?: CordCreateOrConnectWithoutSettingInput | CordCreateOrConnectWithoutSettingInput[]
    upsert?: CordUpsertWithWhereUniqueWithoutSettingInput | CordUpsertWithWhereUniqueWithoutSettingInput[]
    createMany?: CordCreateManySettingInputEnvelope
    set?: CordWhereUniqueInput | CordWhereUniqueInput[]
    disconnect?: CordWhereUniqueInput | CordWhereUniqueInput[]
    delete?: CordWhereUniqueInput | CordWhereUniqueInput[]
    connect?: CordWhereUniqueInput | CordWhereUniqueInput[]
    update?: CordUpdateWithWhereUniqueWithoutSettingInput | CordUpdateWithWhereUniqueWithoutSettingInput[]
    updateMany?: CordUpdateManyWithWhereWithoutSettingInput | CordUpdateManyWithWhereWithoutSettingInput[]
    deleteMany?: CordScalarWhereInput | CordScalarWhereInput[]
  }

  export type ScoreUpdateManyWithoutSettingNestedInput = {
    create?: XOR<ScoreCreateWithoutSettingInput, ScoreUncheckedCreateWithoutSettingInput> | ScoreCreateWithoutSettingInput[] | ScoreUncheckedCreateWithoutSettingInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutSettingInput | ScoreCreateOrConnectWithoutSettingInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutSettingInput | ScoreUpsertWithWhereUniqueWithoutSettingInput[]
    createMany?: ScoreCreateManySettingInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutSettingInput | ScoreUpdateWithWhereUniqueWithoutSettingInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutSettingInput | ScoreUpdateManyWithWhereWithoutSettingInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CordUncheckedUpdateManyWithoutSettingNestedInput = {
    create?: XOR<CordCreateWithoutSettingInput, CordUncheckedCreateWithoutSettingInput> | CordCreateWithoutSettingInput[] | CordUncheckedCreateWithoutSettingInput[]
    connectOrCreate?: CordCreateOrConnectWithoutSettingInput | CordCreateOrConnectWithoutSettingInput[]
    upsert?: CordUpsertWithWhereUniqueWithoutSettingInput | CordUpsertWithWhereUniqueWithoutSettingInput[]
    createMany?: CordCreateManySettingInputEnvelope
    set?: CordWhereUniqueInput | CordWhereUniqueInput[]
    disconnect?: CordWhereUniqueInput | CordWhereUniqueInput[]
    delete?: CordWhereUniqueInput | CordWhereUniqueInput[]
    connect?: CordWhereUniqueInput | CordWhereUniqueInput[]
    update?: CordUpdateWithWhereUniqueWithoutSettingInput | CordUpdateWithWhereUniqueWithoutSettingInput[]
    updateMany?: CordUpdateManyWithWhereWithoutSettingInput | CordUpdateManyWithWhereWithoutSettingInput[]
    deleteMany?: CordScalarWhereInput | CordScalarWhereInput[]
  }

  export type ScoreUncheckedUpdateManyWithoutSettingNestedInput = {
    create?: XOR<ScoreCreateWithoutSettingInput, ScoreUncheckedCreateWithoutSettingInput> | ScoreCreateWithoutSettingInput[] | ScoreUncheckedCreateWithoutSettingInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutSettingInput | ScoreCreateOrConnectWithoutSettingInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutSettingInput | ScoreUpsertWithWhereUniqueWithoutSettingInput[]
    createMany?: ScoreCreateManySettingInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutSettingInput | ScoreUpdateWithWhereUniqueWithoutSettingInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutSettingInput | ScoreUpdateManyWithWhereWithoutSettingInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type CordCreateNestedManyWithoutCharInput = {
    create?: XOR<CordCreateWithoutCharInput, CordUncheckedCreateWithoutCharInput> | CordCreateWithoutCharInput[] | CordUncheckedCreateWithoutCharInput[]
    connectOrCreate?: CordCreateOrConnectWithoutCharInput | CordCreateOrConnectWithoutCharInput[]
    createMany?: CordCreateManyCharInputEnvelope
    connect?: CordWhereUniqueInput | CordWhereUniqueInput[]
  }

  export type CordUncheckedCreateNestedManyWithoutCharInput = {
    create?: XOR<CordCreateWithoutCharInput, CordUncheckedCreateWithoutCharInput> | CordCreateWithoutCharInput[] | CordUncheckedCreateWithoutCharInput[]
    connectOrCreate?: CordCreateOrConnectWithoutCharInput | CordCreateOrConnectWithoutCharInput[]
    createMany?: CordCreateManyCharInputEnvelope
    connect?: CordWhereUniqueInput | CordWhereUniqueInput[]
  }

  export type CordUpdateManyWithoutCharNestedInput = {
    create?: XOR<CordCreateWithoutCharInput, CordUncheckedCreateWithoutCharInput> | CordCreateWithoutCharInput[] | CordUncheckedCreateWithoutCharInput[]
    connectOrCreate?: CordCreateOrConnectWithoutCharInput | CordCreateOrConnectWithoutCharInput[]
    upsert?: CordUpsertWithWhereUniqueWithoutCharInput | CordUpsertWithWhereUniqueWithoutCharInput[]
    createMany?: CordCreateManyCharInputEnvelope
    set?: CordWhereUniqueInput | CordWhereUniqueInput[]
    disconnect?: CordWhereUniqueInput | CordWhereUniqueInput[]
    delete?: CordWhereUniqueInput | CordWhereUniqueInput[]
    connect?: CordWhereUniqueInput | CordWhereUniqueInput[]
    update?: CordUpdateWithWhereUniqueWithoutCharInput | CordUpdateWithWhereUniqueWithoutCharInput[]
    updateMany?: CordUpdateManyWithWhereWithoutCharInput | CordUpdateManyWithWhereWithoutCharInput[]
    deleteMany?: CordScalarWhereInput | CordScalarWhereInput[]
  }

  export type CordUncheckedUpdateManyWithoutCharNestedInput = {
    create?: XOR<CordCreateWithoutCharInput, CordUncheckedCreateWithoutCharInput> | CordCreateWithoutCharInput[] | CordUncheckedCreateWithoutCharInput[]
    connectOrCreate?: CordCreateOrConnectWithoutCharInput | CordCreateOrConnectWithoutCharInput[]
    upsert?: CordUpsertWithWhereUniqueWithoutCharInput | CordUpsertWithWhereUniqueWithoutCharInput[]
    createMany?: CordCreateManyCharInputEnvelope
    set?: CordWhereUniqueInput | CordWhereUniqueInput[]
    disconnect?: CordWhereUniqueInput | CordWhereUniqueInput[]
    delete?: CordWhereUniqueInput | CordWhereUniqueInput[]
    connect?: CordWhereUniqueInput | CordWhereUniqueInput[]
    update?: CordUpdateWithWhereUniqueWithoutCharInput | CordUpdateWithWhereUniqueWithoutCharInput[]
    updateMany?: CordUpdateManyWithWhereWithoutCharInput | CordUpdateManyWithWhereWithoutCharInput[]
    deleteMany?: CordScalarWhereInput | CordScalarWhereInput[]
  }

  export type CharCreateNestedOneWithoutCordsInput = {
    create?: XOR<CharCreateWithoutCordsInput, CharUncheckedCreateWithoutCordsInput>
    connectOrCreate?: CharCreateOrConnectWithoutCordsInput
    connect?: CharWhereUniqueInput
  }

  export type SettingCreateNestedOneWithoutCordsInput = {
    create?: XOR<SettingCreateWithoutCordsInput, SettingUncheckedCreateWithoutCordsInput>
    connectOrCreate?: SettingCreateOrConnectWithoutCordsInput
    connect?: SettingWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CharUpdateOneRequiredWithoutCordsNestedInput = {
    create?: XOR<CharCreateWithoutCordsInput, CharUncheckedCreateWithoutCordsInput>
    connectOrCreate?: CharCreateOrConnectWithoutCordsInput
    upsert?: CharUpsertWithoutCordsInput
    connect?: CharWhereUniqueInput
    update?: XOR<XOR<CharUpdateToOneWithWhereWithoutCordsInput, CharUpdateWithoutCordsInput>, CharUncheckedUpdateWithoutCordsInput>
  }

  export type SettingUpdateOneRequiredWithoutCordsNestedInput = {
    create?: XOR<SettingCreateWithoutCordsInput, SettingUncheckedCreateWithoutCordsInput>
    connectOrCreate?: SettingCreateOrConnectWithoutCordsInput
    upsert?: SettingUpsertWithoutCordsInput
    connect?: SettingWhereUniqueInput
    update?: XOR<XOR<SettingUpdateToOneWithWhereWithoutCordsInput, SettingUpdateWithoutCordsInput>, SettingUncheckedUpdateWithoutCordsInput>
  }

  export type SettingCreateNestedOneWithoutScoresInput = {
    create?: XOR<SettingCreateWithoutScoresInput, SettingUncheckedCreateWithoutScoresInput>
    connectOrCreate?: SettingCreateOrConnectWithoutScoresInput
    connect?: SettingWhereUniqueInput
  }

  export type SettingUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<SettingCreateWithoutScoresInput, SettingUncheckedCreateWithoutScoresInput>
    connectOrCreate?: SettingCreateOrConnectWithoutScoresInput
    upsert?: SettingUpsertWithoutScoresInput
    connect?: SettingWhereUniqueInput
    update?: XOR<XOR<SettingUpdateToOneWithWhereWithoutScoresInput, SettingUpdateWithoutScoresInput>, SettingUncheckedUpdateWithoutScoresInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CordCreateWithoutSettingInput = {
    x_min: Decimal | DecimalJsLike | number | string
    x_max: Decimal | DecimalJsLike | number | string
    y_min: Decimal | DecimalJsLike | number | string
    y_max: Decimal | DecimalJsLike | number | string
    char: CharCreateNestedOneWithoutCordsInput
  }

  export type CordUncheckedCreateWithoutSettingInput = {
    id?: number
    x_min: Decimal | DecimalJsLike | number | string
    x_max: Decimal | DecimalJsLike | number | string
    y_min: Decimal | DecimalJsLike | number | string
    y_max: Decimal | DecimalJsLike | number | string
    char_id: number
  }

  export type CordCreateOrConnectWithoutSettingInput = {
    where: CordWhereUniqueInput
    create: XOR<CordCreateWithoutSettingInput, CordUncheckedCreateWithoutSettingInput>
  }

  export type CordCreateManySettingInputEnvelope = {
    data: CordCreateManySettingInput | CordCreateManySettingInput[]
    skipDuplicates?: boolean
  }

  export type ScoreCreateWithoutSettingInput = {
    seconds: Decimal | DecimalJsLike | number | string
    username: string
  }

  export type ScoreUncheckedCreateWithoutSettingInput = {
    id?: number
    seconds: Decimal | DecimalJsLike | number | string
    username: string
  }

  export type ScoreCreateOrConnectWithoutSettingInput = {
    where: ScoreWhereUniqueInput
    create: XOR<ScoreCreateWithoutSettingInput, ScoreUncheckedCreateWithoutSettingInput>
  }

  export type ScoreCreateManySettingInputEnvelope = {
    data: ScoreCreateManySettingInput | ScoreCreateManySettingInput[]
    skipDuplicates?: boolean
  }

  export type CordUpsertWithWhereUniqueWithoutSettingInput = {
    where: CordWhereUniqueInput
    update: XOR<CordUpdateWithoutSettingInput, CordUncheckedUpdateWithoutSettingInput>
    create: XOR<CordCreateWithoutSettingInput, CordUncheckedCreateWithoutSettingInput>
  }

  export type CordUpdateWithWhereUniqueWithoutSettingInput = {
    where: CordWhereUniqueInput
    data: XOR<CordUpdateWithoutSettingInput, CordUncheckedUpdateWithoutSettingInput>
  }

  export type CordUpdateManyWithWhereWithoutSettingInput = {
    where: CordScalarWhereInput
    data: XOR<CordUpdateManyMutationInput, CordUncheckedUpdateManyWithoutSettingInput>
  }

  export type CordScalarWhereInput = {
    AND?: CordScalarWhereInput | CordScalarWhereInput[]
    OR?: CordScalarWhereInput[]
    NOT?: CordScalarWhereInput | CordScalarWhereInput[]
    id?: IntFilter<"Cord"> | number
    x_min?: DecimalFilter<"Cord"> | Decimal | DecimalJsLike | number | string
    x_max?: DecimalFilter<"Cord"> | Decimal | DecimalJsLike | number | string
    y_min?: DecimalFilter<"Cord"> | Decimal | DecimalJsLike | number | string
    y_max?: DecimalFilter<"Cord"> | Decimal | DecimalJsLike | number | string
    char_id?: IntFilter<"Cord"> | number
    setting_id?: IntFilter<"Cord"> | number
  }

  export type ScoreUpsertWithWhereUniqueWithoutSettingInput = {
    where: ScoreWhereUniqueInput
    update: XOR<ScoreUpdateWithoutSettingInput, ScoreUncheckedUpdateWithoutSettingInput>
    create: XOR<ScoreCreateWithoutSettingInput, ScoreUncheckedCreateWithoutSettingInput>
  }

  export type ScoreUpdateWithWhereUniqueWithoutSettingInput = {
    where: ScoreWhereUniqueInput
    data: XOR<ScoreUpdateWithoutSettingInput, ScoreUncheckedUpdateWithoutSettingInput>
  }

  export type ScoreUpdateManyWithWhereWithoutSettingInput = {
    where: ScoreScalarWhereInput
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyWithoutSettingInput>
  }

  export type ScoreScalarWhereInput = {
    AND?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
    OR?: ScoreScalarWhereInput[]
    NOT?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
    id?: IntFilter<"Score"> | number
    seconds?: DecimalFilter<"Score"> | Decimal | DecimalJsLike | number | string
    username?: StringFilter<"Score"> | string
    setting_id?: IntFilter<"Score"> | number
  }

  export type CordCreateWithoutCharInput = {
    x_min: Decimal | DecimalJsLike | number | string
    x_max: Decimal | DecimalJsLike | number | string
    y_min: Decimal | DecimalJsLike | number | string
    y_max: Decimal | DecimalJsLike | number | string
    setting: SettingCreateNestedOneWithoutCordsInput
  }

  export type CordUncheckedCreateWithoutCharInput = {
    id?: number
    x_min: Decimal | DecimalJsLike | number | string
    x_max: Decimal | DecimalJsLike | number | string
    y_min: Decimal | DecimalJsLike | number | string
    y_max: Decimal | DecimalJsLike | number | string
    setting_id: number
  }

  export type CordCreateOrConnectWithoutCharInput = {
    where: CordWhereUniqueInput
    create: XOR<CordCreateWithoutCharInput, CordUncheckedCreateWithoutCharInput>
  }

  export type CordCreateManyCharInputEnvelope = {
    data: CordCreateManyCharInput | CordCreateManyCharInput[]
    skipDuplicates?: boolean
  }

  export type CordUpsertWithWhereUniqueWithoutCharInput = {
    where: CordWhereUniqueInput
    update: XOR<CordUpdateWithoutCharInput, CordUncheckedUpdateWithoutCharInput>
    create: XOR<CordCreateWithoutCharInput, CordUncheckedCreateWithoutCharInput>
  }

  export type CordUpdateWithWhereUniqueWithoutCharInput = {
    where: CordWhereUniqueInput
    data: XOR<CordUpdateWithoutCharInput, CordUncheckedUpdateWithoutCharInput>
  }

  export type CordUpdateManyWithWhereWithoutCharInput = {
    where: CordScalarWhereInput
    data: XOR<CordUpdateManyMutationInput, CordUncheckedUpdateManyWithoutCharInput>
  }

  export type CharCreateWithoutCordsInput = {
    name: string
    img: string
  }

  export type CharUncheckedCreateWithoutCordsInput = {
    id?: number
    name: string
    img: string
  }

  export type CharCreateOrConnectWithoutCordsInput = {
    where: CharWhereUniqueInput
    create: XOR<CharCreateWithoutCordsInput, CharUncheckedCreateWithoutCordsInput>
  }

  export type SettingCreateWithoutCordsInput = {
    name: string
    img: string
    Scores?: ScoreCreateNestedManyWithoutSettingInput
  }

  export type SettingUncheckedCreateWithoutCordsInput = {
    id?: number
    name: string
    img: string
    Scores?: ScoreUncheckedCreateNestedManyWithoutSettingInput
  }

  export type SettingCreateOrConnectWithoutCordsInput = {
    where: SettingWhereUniqueInput
    create: XOR<SettingCreateWithoutCordsInput, SettingUncheckedCreateWithoutCordsInput>
  }

  export type CharUpsertWithoutCordsInput = {
    update: XOR<CharUpdateWithoutCordsInput, CharUncheckedUpdateWithoutCordsInput>
    create: XOR<CharCreateWithoutCordsInput, CharUncheckedCreateWithoutCordsInput>
    where?: CharWhereInput
  }

  export type CharUpdateToOneWithWhereWithoutCordsInput = {
    where?: CharWhereInput
    data: XOR<CharUpdateWithoutCordsInput, CharUncheckedUpdateWithoutCordsInput>
  }

  export type CharUpdateWithoutCordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type CharUncheckedUpdateWithoutCordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type SettingUpsertWithoutCordsInput = {
    update: XOR<SettingUpdateWithoutCordsInput, SettingUncheckedUpdateWithoutCordsInput>
    create: XOR<SettingCreateWithoutCordsInput, SettingUncheckedCreateWithoutCordsInput>
    where?: SettingWhereInput
  }

  export type SettingUpdateToOneWithWhereWithoutCordsInput = {
    where?: SettingWhereInput
    data: XOR<SettingUpdateWithoutCordsInput, SettingUncheckedUpdateWithoutCordsInput>
  }

  export type SettingUpdateWithoutCordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    Scores?: ScoreUpdateManyWithoutSettingNestedInput
  }

  export type SettingUncheckedUpdateWithoutCordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    Scores?: ScoreUncheckedUpdateManyWithoutSettingNestedInput
  }

  export type SettingCreateWithoutScoresInput = {
    name: string
    img: string
    Cords?: CordCreateNestedManyWithoutSettingInput
  }

  export type SettingUncheckedCreateWithoutScoresInput = {
    id?: number
    name: string
    img: string
    Cords?: CordUncheckedCreateNestedManyWithoutSettingInput
  }

  export type SettingCreateOrConnectWithoutScoresInput = {
    where: SettingWhereUniqueInput
    create: XOR<SettingCreateWithoutScoresInput, SettingUncheckedCreateWithoutScoresInput>
  }

  export type SettingUpsertWithoutScoresInput = {
    update: XOR<SettingUpdateWithoutScoresInput, SettingUncheckedUpdateWithoutScoresInput>
    create: XOR<SettingCreateWithoutScoresInput, SettingUncheckedCreateWithoutScoresInput>
    where?: SettingWhereInput
  }

  export type SettingUpdateToOneWithWhereWithoutScoresInput = {
    where?: SettingWhereInput
    data: XOR<SettingUpdateWithoutScoresInput, SettingUncheckedUpdateWithoutScoresInput>
  }

  export type SettingUpdateWithoutScoresInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    Cords?: CordUpdateManyWithoutSettingNestedInput
  }

  export type SettingUncheckedUpdateWithoutScoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    Cords?: CordUncheckedUpdateManyWithoutSettingNestedInput
  }

  export type CordCreateManySettingInput = {
    id?: number
    x_min: Decimal | DecimalJsLike | number | string
    x_max: Decimal | DecimalJsLike | number | string
    y_min: Decimal | DecimalJsLike | number | string
    y_max: Decimal | DecimalJsLike | number | string
    char_id: number
  }

  export type ScoreCreateManySettingInput = {
    id?: number
    seconds: Decimal | DecimalJsLike | number | string
    username: string
  }

  export type CordUpdateWithoutSettingInput = {
    x_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    x_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    char?: CharUpdateOneRequiredWithoutCordsNestedInput
  }

  export type CordUncheckedUpdateWithoutSettingInput = {
    id?: IntFieldUpdateOperationsInput | number
    x_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    x_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    char_id?: IntFieldUpdateOperationsInput | number
  }

  export type CordUncheckedUpdateManyWithoutSettingInput = {
    id?: IntFieldUpdateOperationsInput | number
    x_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    x_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    char_id?: IntFieldUpdateOperationsInput | number
  }

  export type ScoreUpdateWithoutSettingInput = {
    seconds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreUncheckedUpdateWithoutSettingInput = {
    id?: IntFieldUpdateOperationsInput | number
    seconds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreUncheckedUpdateManyWithoutSettingInput = {
    id?: IntFieldUpdateOperationsInput | number
    seconds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type CordCreateManyCharInput = {
    id?: number
    x_min: Decimal | DecimalJsLike | number | string
    x_max: Decimal | DecimalJsLike | number | string
    y_min: Decimal | DecimalJsLike | number | string
    y_max: Decimal | DecimalJsLike | number | string
    setting_id: number
  }

  export type CordUpdateWithoutCharInput = {
    x_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    x_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    setting?: SettingUpdateOneRequiredWithoutCordsNestedInput
  }

  export type CordUncheckedUpdateWithoutCharInput = {
    id?: IntFieldUpdateOperationsInput | number
    x_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    x_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    setting_id?: IntFieldUpdateOperationsInput | number
  }

  export type CordUncheckedUpdateManyWithoutCharInput = {
    id?: IntFieldUpdateOperationsInput | number
    x_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    x_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_min?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    y_max?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    setting_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
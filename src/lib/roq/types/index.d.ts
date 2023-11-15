/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model applicant
 *
 */
export type applicant = $Result.DefaultSelection<Prisma.$applicantPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model interview
 *
 */
export type interview = $Result.DefaultSelection<Prisma.$interviewPayload>;
/**
 * Model job_posting
 *
 */
export type job_posting = $Result.DefaultSelection<Prisma.$job_postingPayload>;
/**
 * Model owner
 *
 */
export type owner = $Result.DefaultSelection<Prisma.$ownerPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Applicants
 * const applicants = await prisma.applicant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Applicants
   * const applicants = await prisma.applicant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.applicant`: Exposes CRUD operations for the **applicant** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Applicants
   * const applicants = await prisma.applicant.findMany()
   * ```
   */
  get applicant(): Prisma.applicantDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.interview`: Exposes CRUD operations for the **interview** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Interviews
   * const interviews = await prisma.interview.findMany()
   * ```
   */
  get interview(): Prisma.interviewDelegate<ExtArgs>;

  /**
   * `prisma.job_posting`: Exposes CRUD operations for the **job_posting** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Job_postings
   * const job_postings = await prisma.job_posting.findMany()
   * ```
   */
  get job_posting(): Prisma.job_postingDelegate<ExtArgs>;

  /**
   * `prisma.owner`: Exposes CRUD operations for the **owner** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Owners
   * const owners = await prisma.owner.findMany()
   * ```
   */
  get owner(): Prisma.ownerDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    applicant: 'applicant';
    company: 'company';
    interview: 'interview';
    job_posting: 'job_posting';
    owner: 'owner';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'applicant' | 'company' | 'interview' | 'job_posting' | 'owner' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      applicant: {
        payload: Prisma.$applicantPayload<ExtArgs>;
        fields: Prisma.applicantFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.applicantFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.applicantFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>;
          };
          findFirst: {
            args: Prisma.applicantFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.applicantFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>;
          };
          findMany: {
            args: Prisma.applicantFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>[];
          };
          create: {
            args: Prisma.applicantCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>;
          };
          createMany: {
            args: Prisma.applicantCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.applicantDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>;
          };
          update: {
            args: Prisma.applicantUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>;
          };
          deleteMany: {
            args: Prisma.applicantDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.applicantUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.applicantUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>;
          };
          aggregate: {
            args: Prisma.ApplicantAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateApplicant>;
          };
          groupBy: {
            args: Prisma.applicantGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ApplicantGroupByOutputType>[];
          };
          count: {
            args: Prisma.applicantCountArgs<ExtArgs>;
            result: $Utils.Optional<ApplicantCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      interview: {
        payload: Prisma.$interviewPayload<ExtArgs>;
        fields: Prisma.interviewFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.interviewFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$interviewPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.interviewFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$interviewPayload>;
          };
          findFirst: {
            args: Prisma.interviewFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$interviewPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.interviewFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$interviewPayload>;
          };
          findMany: {
            args: Prisma.interviewFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$interviewPayload>[];
          };
          create: {
            args: Prisma.interviewCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$interviewPayload>;
          };
          createMany: {
            args: Prisma.interviewCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.interviewDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$interviewPayload>;
          };
          update: {
            args: Prisma.interviewUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$interviewPayload>;
          };
          deleteMany: {
            args: Prisma.interviewDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.interviewUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.interviewUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$interviewPayload>;
          };
          aggregate: {
            args: Prisma.InterviewAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInterview>;
          };
          groupBy: {
            args: Prisma.interviewGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InterviewGroupByOutputType>[];
          };
          count: {
            args: Prisma.interviewCountArgs<ExtArgs>;
            result: $Utils.Optional<InterviewCountAggregateOutputType> | number;
          };
        };
      };
      job_posting: {
        payload: Prisma.$job_postingPayload<ExtArgs>;
        fields: Prisma.job_postingFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.job_postingFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_postingPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.job_postingFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_postingPayload>;
          };
          findFirst: {
            args: Prisma.job_postingFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_postingPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.job_postingFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_postingPayload>;
          };
          findMany: {
            args: Prisma.job_postingFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_postingPayload>[];
          };
          create: {
            args: Prisma.job_postingCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_postingPayload>;
          };
          createMany: {
            args: Prisma.job_postingCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.job_postingDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_postingPayload>;
          };
          update: {
            args: Prisma.job_postingUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_postingPayload>;
          };
          deleteMany: {
            args: Prisma.job_postingDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.job_postingUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.job_postingUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_postingPayload>;
          };
          aggregate: {
            args: Prisma.Job_postingAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJob_posting>;
          };
          groupBy: {
            args: Prisma.job_postingGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Job_postingGroupByOutputType>[];
          };
          count: {
            args: Prisma.job_postingCountArgs<ExtArgs>;
            result: $Utils.Optional<Job_postingCountAggregateOutputType> | number;
          };
        };
      };
      owner: {
        payload: Prisma.$ownerPayload<ExtArgs>;
        fields: Prisma.ownerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ownerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ownerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          findFirst: {
            args: Prisma.ownerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ownerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          findMany: {
            args: Prisma.ownerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>[];
          };
          create: {
            args: Prisma.ownerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          createMany: {
            args: Prisma.ownerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.ownerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          update: {
            args: Prisma.ownerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          deleteMany: {
            args: Prisma.ownerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.ownerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.ownerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOwner>;
          };
          groupBy: {
            args: Prisma.ownerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OwnerGroupByOutputType>[];
          };
          count: {
            args: Prisma.ownerCountArgs<ExtArgs>;
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type ApplicantCountOutputType
   */

  export type ApplicantCountOutputType = {
    interview: number;
  };

  export type ApplicantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | ApplicantCountOutputTypeCountInterviewArgs;
  };

  // Custom InputTypes

  /**
   * ApplicantCountOutputType without action
   */
  export type ApplicantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the ApplicantCountOutputType
       */
      select?: ApplicantCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * ApplicantCountOutputType without action
   */
  export type ApplicantCountOutputTypeCountInterviewArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: interviewWhereInput;
  };

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    job_posting: number;
    owner: number;
    user: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_posting?: boolean | CompanyCountOutputTypeCountJob_postingArgs;
    owner?: boolean | CompanyCountOutputTypeCountOwnerArgs;
    user?: boolean | CompanyCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountJob_postingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: job_postingWhereInput;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: ownerWhereInput;
    };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: userWhereInput;
    };

  /**
   * Count Type Job_postingCountOutputType
   */

  export type Job_postingCountOutputType = {
    interview: number;
  };

  export type Job_postingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | Job_postingCountOutputTypeCountInterviewArgs;
  };

  // Custom InputTypes

  /**
   * Job_postingCountOutputType without action
   */
  export type Job_postingCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job_postingCountOutputType
     */
    select?: Job_postingCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Job_postingCountOutputType without action
   */
  export type Job_postingCountOutputTypeCountInterviewArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: interviewWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    applicant: number;
    interview: number;
    owner: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | UserCountOutputTypeCountApplicantArgs;
    interview?: boolean | UserCountOutputTypeCountInterviewArgs;
    owner?: boolean | UserCountOutputTypeCountOwnerArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicantArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: applicantWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInterviewArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: interviewWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ownerWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model applicant
   */

  export type AggregateApplicant = {
    _count: ApplicantCountAggregateOutputType | null;
    _min: ApplicantMinAggregateOutputType | null;
    _max: ApplicantMaxAggregateOutputType | null;
  };

  export type ApplicantMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    resume: string | null;
    application_date: Date | null;
    status: string | null;
    position_applied: string | null;
    interview_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ApplicantMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    resume: string | null;
    application_date: Date | null;
    status: string | null;
    position_applied: string | null;
    interview_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ApplicantCountAggregateOutputType = {
    id: number;
    user_id: number;
    resume: number;
    application_date: number;
    status: number;
    position_applied: number;
    interview_date: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ApplicantMinAggregateInputType = {
    id?: true;
    user_id?: true;
    resume?: true;
    application_date?: true;
    status?: true;
    position_applied?: true;
    interview_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ApplicantMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    resume?: true;
    application_date?: true;
    status?: true;
    position_applied?: true;
    interview_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ApplicantCountAggregateInputType = {
    id?: true;
    user_id?: true;
    resume?: true;
    application_date?: true;
    status?: true;
    position_applied?: true;
    interview_date?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ApplicantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applicant to aggregate.
     */
    where?: applicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantOrderByWithRelationInput | applicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: applicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned applicants
     **/
    _count?: true | ApplicantCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ApplicantMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ApplicantMaxAggregateInputType;
  };

  export type GetApplicantAggregateType<T extends ApplicantAggregateArgs> = {
    [P in keyof T & keyof AggregateApplicant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicant[P]>
      : GetScalarType<T[P], AggregateApplicant[P]>;
  };

  export type applicantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicantWhereInput;
    orderBy?: applicantOrderByWithAggregationInput | applicantOrderByWithAggregationInput[];
    by: ApplicantScalarFieldEnum[] | ApplicantScalarFieldEnum;
    having?: applicantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApplicantCountAggregateInputType | true;
    _min?: ApplicantMinAggregateInputType;
    _max?: ApplicantMaxAggregateInputType;
  };

  export type ApplicantGroupByOutputType = {
    id: string;
    user_id: string;
    resume: string | null;
    application_date: Date | null;
    status: string | null;
    position_applied: string | null;
    interview_date: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: ApplicantCountAggregateOutputType | null;
    _min: ApplicantMinAggregateOutputType | null;
    _max: ApplicantMaxAggregateOutputType | null;
  };

  type GetApplicantGroupByPayload<T extends applicantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicantGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ApplicantGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ApplicantGroupByOutputType[P]>
          : GetScalarType<T[P], ApplicantGroupByOutputType[P]>;
      }
    >
  >;

  export type applicantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        resume?: boolean;
        application_date?: boolean;
        status?: boolean;
        position_applied?: boolean;
        interview_date?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
        interview?: boolean | applicant$interviewArgs<ExtArgs>;
        _count?: boolean | ApplicantCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['applicant']
    >;

  export type applicantSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    resume?: boolean;
    application_date?: boolean;
    status?: boolean;
    position_applied?: boolean;
    interview_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type applicantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    interview?: boolean | applicant$interviewArgs<ExtArgs>;
    _count?: boolean | ApplicantCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $applicantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'applicant';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      interview: Prisma.$interviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        resume: string | null;
        application_date: Date | null;
        status: string | null;
        position_applied: string | null;
        interview_date: Date | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['applicant']
    >;
    composites: {};
  };

  type applicantGetPayload<S extends boolean | null | undefined | applicantDefaultArgs> = $Result.GetResult<
    Prisma.$applicantPayload,
    S
  >;

  type applicantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    applicantFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ApplicantCountAggregateInputType | true;
  };

  export interface applicantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['applicant']; meta: { name: 'applicant' } };
    /**
     * Find zero or one Applicant that matches the filter.
     * @param {applicantFindUniqueArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends applicantFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, applicantFindUniqueArgs<ExtArgs>>,
    ): Prisma__applicantClient<
      $Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Applicant that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {applicantFindUniqueOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends applicantFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, applicantFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__applicantClient<
      $Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Applicant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantFindFirstArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends applicantFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, applicantFindFirstArgs<ExtArgs>>,
    ): Prisma__applicantClient<
      $Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Applicant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantFindFirstOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends applicantFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, applicantFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__applicantClient<
      $Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applicants
     * const applicants = await prisma.applicant.findMany()
     *
     * // Get first 10 Applicants
     * const applicants = await prisma.applicant.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const applicantWithIdOnly = await prisma.applicant.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends applicantFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, applicantFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Applicant.
     * @param {applicantCreateArgs} args - Arguments to create a Applicant.
     * @example
     * // Create one Applicant
     * const Applicant = await prisma.applicant.create({
     *   data: {
     *     // ... data to create a Applicant
     *   }
     * })
     *
     **/
    create<T extends applicantCreateArgs<ExtArgs>>(
      args: SelectSubset<T, applicantCreateArgs<ExtArgs>>,
    ): Prisma__applicantClient<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Applicants.
     *     @param {applicantCreateManyArgs} args - Arguments to create many Applicants.
     *     @example
     *     // Create many Applicants
     *     const applicant = await prisma.applicant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends applicantCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, applicantCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Applicant.
     * @param {applicantDeleteArgs} args - Arguments to delete one Applicant.
     * @example
     * // Delete one Applicant
     * const Applicant = await prisma.applicant.delete({
     *   where: {
     *     // ... filter to delete one Applicant
     *   }
     * })
     *
     **/
    delete<T extends applicantDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, applicantDeleteArgs<ExtArgs>>,
    ): Prisma__applicantClient<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Applicant.
     * @param {applicantUpdateArgs} args - Arguments to update one Applicant.
     * @example
     * // Update one Applicant
     * const applicant = await prisma.applicant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends applicantUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, applicantUpdateArgs<ExtArgs>>,
    ): Prisma__applicantClient<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Applicants.
     * @param {applicantDeleteManyArgs} args - Arguments to filter Applicants to delete.
     * @example
     * // Delete a few Applicants
     * const { count } = await prisma.applicant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends applicantDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, applicantDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applicants
     * const applicant = await prisma.applicant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends applicantUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, applicantUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Applicant.
     * @param {applicantUpsertArgs} args - Arguments to update or create a Applicant.
     * @example
     * // Update or create a Applicant
     * const applicant = await prisma.applicant.upsert({
     *   create: {
     *     // ... data to create a Applicant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applicant we want to update
     *   }
     * })
     **/
    upsert<T extends applicantUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, applicantUpsertArgs<ExtArgs>>,
    ): Prisma__applicantClient<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantCountArgs} args - Arguments to filter Applicants to count.
     * @example
     * // Count the number of Applicants
     * const count = await prisma.applicant.count({
     *   where: {
     *     // ... the filter for the Applicants we want to count
     *   }
     * })
     **/
    count<T extends applicantCountArgs>(
      args?: Subset<T, applicantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicantCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicantAggregateArgs>(
      args: Subset<T, ApplicantAggregateArgs>,
    ): Prisma.PrismaPromise<GetApplicantAggregateType<T>>;

    /**
     * Group by Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantGroupByArgs} args - Group by arguments.
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
      T extends applicantGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: applicantGroupByArgs['orderBy'] }
        : { orderBy?: applicantGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, applicantGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetApplicantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the applicant model
     */
    readonly fields: applicantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for applicant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__applicantClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    interview<T extends applicant$interviewArgs<ExtArgs> = {}>(
      args?: Subset<T, applicant$interviewArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the applicant model
   */
  interface applicantFieldRefs {
    readonly id: FieldRef<'applicant', 'String'>;
    readonly user_id: FieldRef<'applicant', 'String'>;
    readonly resume: FieldRef<'applicant', 'String'>;
    readonly application_date: FieldRef<'applicant', 'DateTime'>;
    readonly status: FieldRef<'applicant', 'String'>;
    readonly position_applied: FieldRef<'applicant', 'String'>;
    readonly interview_date: FieldRef<'applicant', 'DateTime'>;
    readonly created_at: FieldRef<'applicant', 'DateTime'>;
    readonly updated_at: FieldRef<'applicant', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * applicant findUnique
   */
  export type applicantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * Filter, which applicant to fetch.
     */
    where: applicantWhereUniqueInput;
  };

  /**
   * applicant findUniqueOrThrow
   */
  export type applicantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * Filter, which applicant to fetch.
     */
    where: applicantWhereUniqueInput;
  };

  /**
   * applicant findFirst
   */
  export type applicantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * Filter, which applicant to fetch.
     */
    where?: applicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantOrderByWithRelationInput | applicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for applicants.
     */
    cursor?: applicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of applicants.
     */
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * applicant findFirstOrThrow
   */
  export type applicantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * Filter, which applicant to fetch.
     */
    where?: applicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantOrderByWithRelationInput | applicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for applicants.
     */
    cursor?: applicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of applicants.
     */
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * applicant findMany
   */
  export type applicantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * Filter, which applicants to fetch.
     */
    where?: applicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantOrderByWithRelationInput | applicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing applicants.
     */
    cursor?: applicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applicants.
     */
    skip?: number;
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * applicant create
   */
  export type applicantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * The data needed to create a applicant.
     */
    data: XOR<applicantCreateInput, applicantUncheckedCreateInput>;
  };

  /**
   * applicant createMany
   */
  export type applicantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many applicants.
     */
    data: applicantCreateManyInput | applicantCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * applicant update
   */
  export type applicantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * The data needed to update a applicant.
     */
    data: XOR<applicantUpdateInput, applicantUncheckedUpdateInput>;
    /**
     * Choose, which applicant to update.
     */
    where: applicantWhereUniqueInput;
  };

  /**
   * applicant updateMany
   */
  export type applicantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update applicants.
     */
    data: XOR<applicantUpdateManyMutationInput, applicantUncheckedUpdateManyInput>;
    /**
     * Filter which applicants to update
     */
    where?: applicantWhereInput;
  };

  /**
   * applicant upsert
   */
  export type applicantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * The filter to search for the applicant to update in case it exists.
     */
    where: applicantWhereUniqueInput;
    /**
     * In case the applicant found by the `where` argument doesn't exist, create a new applicant with this data.
     */
    create: XOR<applicantCreateInput, applicantUncheckedCreateInput>;
    /**
     * In case the applicant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<applicantUpdateInput, applicantUncheckedUpdateInput>;
  };

  /**
   * applicant delete
   */
  export type applicantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * Filter which applicant to delete.
     */
    where: applicantWhereUniqueInput;
  };

  /**
   * applicant deleteMany
   */
  export type applicantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applicants to delete
     */
    where?: applicantWhereInput;
  };

  /**
   * applicant.interview
   */
  export type applicant$interviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interview
     */
    select?: interviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interviewInclude<ExtArgs> | null;
    where?: interviewWhereInput;
    orderBy?: interviewOrderByWithRelationInput | interviewOrderByWithRelationInput[];
    cursor?: interviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[];
  };

  /**
   * applicant without action
   */
  export type applicantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _avg: CompanyAvgAggregateOutputType | null;
    _sum: CompanySumAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyAvgAggregateOutputType = {
    size: number | null;
    founded_year: number | null;
  };

  export type CompanySumAggregateOutputType = {
    size: number | null;
    founded_year: number | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    industry: string | null;
    size: number | null;
    founded_year: number | null;
    website_url: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    industry: string | null;
    size: number | null;
    founded_year: number | null;
    website_url: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    industry: number;
    size: number;
    founded_year: number;
    website_url: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CompanyAvgAggregateInputType = {
    size?: true;
    founded_year?: true;
  };

  export type CompanySumAggregateInputType = {
    size?: true;
    founded_year?: true;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    industry?: true;
    size?: true;
    founded_year?: true;
    website_url?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    industry?: true;
    size?: true;
    founded_year?: true;
    website_url?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    industry?: true;
    size?: true;
    founded_year?: true;
    website_url?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CompanyAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CompanySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _avg?: CompanyAvgAggregateInputType;
    _sum?: CompanySumAggregateInputType;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    industry: string | null;
    size: number | null;
    founded_year: number | null;
    website_url: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: CompanyCountAggregateOutputType | null;
    _avg: CompanyAvgAggregateOutputType | null;
    _sum: CompanySumAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      industry?: boolean;
      size?: boolean;
      founded_year?: boolean;
      website_url?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      job_posting?: boolean | company$job_postingArgs<ExtArgs>;
      owner?: boolean | company$ownerArgs<ExtArgs>;
      user?: boolean | company$userArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    industry?: boolean;
    size?: boolean;
    founded_year?: boolean;
    website_url?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_posting?: boolean | company$job_postingArgs<ExtArgs>;
    owner?: boolean | company$ownerArgs<ExtArgs>;
    user?: boolean | company$userArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      job_posting: Prisma.$job_postingPayload<ExtArgs>[];
      owner: Prisma.$ownerPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        industry: string | null;
        size: number | null;
        founded_year: number | null;
        website_url: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job_posting<T extends company$job_postingArgs<ExtArgs> = {}>(
      args?: Subset<T, company$job_postingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'findMany'> | Null>;

    owner<T extends company$ownerArgs<ExtArgs> = {}>(
      args?: Subset<T, company$ownerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends company$userArgs<ExtArgs> = {}>(
      args?: Subset<T, company$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly address: FieldRef<'company', 'String'>;
    readonly industry: FieldRef<'company', 'String'>;
    readonly size: FieldRef<'company', 'Int'>;
    readonly founded_year: FieldRef<'company', 'Int'>;
    readonly website_url: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.job_posting
   */
  export type company$job_postingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    where?: job_postingWhereInput;
    orderBy?: job_postingOrderByWithRelationInput | job_postingOrderByWithRelationInput[];
    cursor?: job_postingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Job_postingScalarFieldEnum | Job_postingScalarFieldEnum[];
  };

  /**
   * company.owner
   */
  export type company$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    where?: ownerWhereInput;
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    cursor?: ownerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * company.user
   */
  export type company$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model interview
   */

  export type AggregateInterview = {
    _count: InterviewCountAggregateOutputType | null;
    _min: InterviewMinAggregateOutputType | null;
    _max: InterviewMaxAggregateOutputType | null;
  };

  export type InterviewMinAggregateOutputType = {
    id: string | null;
    applicant_id: string | null;
    interviewer_id: string | null;
    job_posting_id: string | null;
    date: Date | null;
    feedback: string | null;
    result: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InterviewMaxAggregateOutputType = {
    id: string | null;
    applicant_id: string | null;
    interviewer_id: string | null;
    job_posting_id: string | null;
    date: Date | null;
    feedback: string | null;
    result: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InterviewCountAggregateOutputType = {
    id: number;
    applicant_id: number;
    interviewer_id: number;
    job_posting_id: number;
    date: number;
    feedback: number;
    result: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type InterviewMinAggregateInputType = {
    id?: true;
    applicant_id?: true;
    interviewer_id?: true;
    job_posting_id?: true;
    date?: true;
    feedback?: true;
    result?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InterviewMaxAggregateInputType = {
    id?: true;
    applicant_id?: true;
    interviewer_id?: true;
    job_posting_id?: true;
    date?: true;
    feedback?: true;
    result?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InterviewCountAggregateInputType = {
    id?: true;
    applicant_id?: true;
    interviewer_id?: true;
    job_posting_id?: true;
    date?: true;
    feedback?: true;
    result?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type InterviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which interview to aggregate.
     */
    where?: interviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of interviews to fetch.
     */
    orderBy?: interviewOrderByWithRelationInput | interviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: interviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` interviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` interviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned interviews
     **/
    _count?: true | InterviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InterviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InterviewMaxAggregateInputType;
  };

  export type GetInterviewAggregateType<T extends InterviewAggregateArgs> = {
    [P in keyof T & keyof AggregateInterview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterview[P]>
      : GetScalarType<T[P], AggregateInterview[P]>;
  };

  export type interviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: interviewWhereInput;
    orderBy?: interviewOrderByWithAggregationInput | interviewOrderByWithAggregationInput[];
    by: InterviewScalarFieldEnum[] | InterviewScalarFieldEnum;
    having?: interviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InterviewCountAggregateInputType | true;
    _min?: InterviewMinAggregateInputType;
    _max?: InterviewMaxAggregateInputType;
  };

  export type InterviewGroupByOutputType = {
    id: string;
    applicant_id: string;
    interviewer_id: string;
    job_posting_id: string;
    date: Date | null;
    feedback: string | null;
    result: string | null;
    created_at: Date;
    updated_at: Date;
    _count: InterviewCountAggregateOutputType | null;
    _min: InterviewMinAggregateOutputType | null;
    _max: InterviewMaxAggregateOutputType | null;
  };

  type GetInterviewGroupByPayload<T extends interviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewGroupByOutputType, T['by']> & {
        [P in keyof T & keyof InterviewGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], InterviewGroupByOutputType[P]>
          : GetScalarType<T[P], InterviewGroupByOutputType[P]>;
      }
    >
  >;

  export type interviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        applicant_id?: boolean;
        interviewer_id?: boolean;
        job_posting_id?: boolean;
        date?: boolean;
        feedback?: boolean;
        result?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        applicant?: boolean | applicantDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        job_posting?: boolean | job_postingDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['interview']
    >;

  export type interviewSelectScalar = {
    id?: boolean;
    applicant_id?: boolean;
    interviewer_id?: boolean;
    job_posting_id?: boolean;
    date?: boolean;
    feedback?: boolean;
    result?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type interviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | applicantDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    job_posting?: boolean | job_postingDefaultArgs<ExtArgs>;
  };

  export type $interviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'interview';
    objects: {
      applicant: Prisma.$applicantPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      job_posting: Prisma.$job_postingPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        applicant_id: string;
        interviewer_id: string;
        job_posting_id: string;
        date: Date | null;
        feedback: string | null;
        result: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['interview']
    >;
    composites: {};
  };

  type interviewGetPayload<S extends boolean | null | undefined | interviewDefaultArgs> = $Result.GetResult<
    Prisma.$interviewPayload,
    S
  >;

  type interviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    interviewFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: InterviewCountAggregateInputType | true;
  };

  export interface interviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['interview']; meta: { name: 'interview' } };
    /**
     * Find zero or one Interview that matches the filter.
     * @param {interviewFindUniqueArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends interviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, interviewFindUniqueArgs<ExtArgs>>,
    ): Prisma__interviewClient<
      $Result.GetResult<Prisma.$interviewPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Interview that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {interviewFindUniqueOrThrowArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends interviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, interviewFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__interviewClient<
      $Result.GetResult<Prisma.$interviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Interview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interviewFindFirstArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends interviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, interviewFindFirstArgs<ExtArgs>>,
    ): Prisma__interviewClient<
      $Result.GetResult<Prisma.$interviewPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Interview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interviewFindFirstOrThrowArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends interviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, interviewFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__interviewClient<
      $Result.GetResult<Prisma.$interviewPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Interviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interviews
     * const interviews = await prisma.interview.findMany()
     *
     * // Get first 10 Interviews
     * const interviews = await prisma.interview.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const interviewWithIdOnly = await prisma.interview.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends interviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, interviewFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interviewPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Interview.
     * @param {interviewCreateArgs} args - Arguments to create a Interview.
     * @example
     * // Create one Interview
     * const Interview = await prisma.interview.create({
     *   data: {
     *     // ... data to create a Interview
     *   }
     * })
     *
     **/
    create<T extends interviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, interviewCreateArgs<ExtArgs>>,
    ): Prisma__interviewClient<$Result.GetResult<Prisma.$interviewPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Interviews.
     *     @param {interviewCreateManyArgs} args - Arguments to create many Interviews.
     *     @example
     *     // Create many Interviews
     *     const interview = await prisma.interview.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends interviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, interviewCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Interview.
     * @param {interviewDeleteArgs} args - Arguments to delete one Interview.
     * @example
     * // Delete one Interview
     * const Interview = await prisma.interview.delete({
     *   where: {
     *     // ... filter to delete one Interview
     *   }
     * })
     *
     **/
    delete<T extends interviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, interviewDeleteArgs<ExtArgs>>,
    ): Prisma__interviewClient<$Result.GetResult<Prisma.$interviewPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Interview.
     * @param {interviewUpdateArgs} args - Arguments to update one Interview.
     * @example
     * // Update one Interview
     * const interview = await prisma.interview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends interviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, interviewUpdateArgs<ExtArgs>>,
    ): Prisma__interviewClient<$Result.GetResult<Prisma.$interviewPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Interviews.
     * @param {interviewDeleteManyArgs} args - Arguments to filter Interviews to delete.
     * @example
     * // Delete a few Interviews
     * const { count } = await prisma.interview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends interviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, interviewDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interviews
     * const interview = await prisma.interview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends interviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, interviewUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Interview.
     * @param {interviewUpsertArgs} args - Arguments to update or create a Interview.
     * @example
     * // Update or create a Interview
     * const interview = await prisma.interview.upsert({
     *   create: {
     *     // ... data to create a Interview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interview we want to update
     *   }
     * })
     **/
    upsert<T extends interviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, interviewUpsertArgs<ExtArgs>>,
    ): Prisma__interviewClient<$Result.GetResult<Prisma.$interviewPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interviewCountArgs} args - Arguments to filter Interviews to count.
     * @example
     * // Count the number of Interviews
     * const count = await prisma.interview.count({
     *   where: {
     *     // ... the filter for the Interviews we want to count
     *   }
     * })
     **/
    count<T extends interviewCountArgs>(
      args?: Subset<T, interviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Interview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterviewAggregateArgs>(
      args: Subset<T, InterviewAggregateArgs>,
    ): Prisma.PrismaPromise<GetInterviewAggregateType<T>>;

    /**
     * Group by Interview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interviewGroupByArgs} args - Group by arguments.
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
      T extends interviewGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: interviewGroupByArgs['orderBy'] }
        : { orderBy?: interviewGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, interviewGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetInterviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the interview model
     */
    readonly fields: interviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for interview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__interviewClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    applicant<T extends applicantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, applicantDefaultArgs<ExtArgs>>,
    ): Prisma__applicantClient<
      $Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    job_posting<T extends job_postingDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, job_postingDefaultArgs<ExtArgs>>,
    ): Prisma__job_postingClient<
      $Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the interview model
   */
  interface interviewFieldRefs {
    readonly id: FieldRef<'interview', 'String'>;
    readonly applicant_id: FieldRef<'interview', 'String'>;
    readonly interviewer_id: FieldRef<'interview', 'String'>;
    readonly job_posting_id: FieldRef<'interview', 'String'>;
    readonly date: FieldRef<'interview', 'DateTime'>;
    readonly feedback: FieldRef<'interview', 'String'>;
    readonly result: FieldRef<'interview', 'String'>;
    readonly created_at: FieldRef<'interview', 'DateTime'>;
    readonly updated_at: FieldRef<'interview', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * interview findUnique
   */
  export type interviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interview
     */
    select?: interviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interviewInclude<ExtArgs> | null;
    /**
     * Filter, which interview to fetch.
     */
    where: interviewWhereUniqueInput;
  };

  /**
   * interview findUniqueOrThrow
   */
  export type interviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interview
     */
    select?: interviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interviewInclude<ExtArgs> | null;
    /**
     * Filter, which interview to fetch.
     */
    where: interviewWhereUniqueInput;
  };

  /**
   * interview findFirst
   */
  export type interviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interview
     */
    select?: interviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interviewInclude<ExtArgs> | null;
    /**
     * Filter, which interview to fetch.
     */
    where?: interviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of interviews to fetch.
     */
    orderBy?: interviewOrderByWithRelationInput | interviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for interviews.
     */
    cursor?: interviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` interviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` interviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of interviews.
     */
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[];
  };

  /**
   * interview findFirstOrThrow
   */
  export type interviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interview
     */
    select?: interviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interviewInclude<ExtArgs> | null;
    /**
     * Filter, which interview to fetch.
     */
    where?: interviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of interviews to fetch.
     */
    orderBy?: interviewOrderByWithRelationInput | interviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for interviews.
     */
    cursor?: interviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` interviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` interviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of interviews.
     */
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[];
  };

  /**
   * interview findMany
   */
  export type interviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interview
     */
    select?: interviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interviewInclude<ExtArgs> | null;
    /**
     * Filter, which interviews to fetch.
     */
    where?: interviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of interviews to fetch.
     */
    orderBy?: interviewOrderByWithRelationInput | interviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing interviews.
     */
    cursor?: interviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` interviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` interviews.
     */
    skip?: number;
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[];
  };

  /**
   * interview create
   */
  export type interviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interview
     */
    select?: interviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interviewInclude<ExtArgs> | null;
    /**
     * The data needed to create a interview.
     */
    data: XOR<interviewCreateInput, interviewUncheckedCreateInput>;
  };

  /**
   * interview createMany
   */
  export type interviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many interviews.
     */
    data: interviewCreateManyInput | interviewCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * interview update
   */
  export type interviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interview
     */
    select?: interviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interviewInclude<ExtArgs> | null;
    /**
     * The data needed to update a interview.
     */
    data: XOR<interviewUpdateInput, interviewUncheckedUpdateInput>;
    /**
     * Choose, which interview to update.
     */
    where: interviewWhereUniqueInput;
  };

  /**
   * interview updateMany
   */
  export type interviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update interviews.
     */
    data: XOR<interviewUpdateManyMutationInput, interviewUncheckedUpdateManyInput>;
    /**
     * Filter which interviews to update
     */
    where?: interviewWhereInput;
  };

  /**
   * interview upsert
   */
  export type interviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interview
     */
    select?: interviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interviewInclude<ExtArgs> | null;
    /**
     * The filter to search for the interview to update in case it exists.
     */
    where: interviewWhereUniqueInput;
    /**
     * In case the interview found by the `where` argument doesn't exist, create a new interview with this data.
     */
    create: XOR<interviewCreateInput, interviewUncheckedCreateInput>;
    /**
     * In case the interview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<interviewUpdateInput, interviewUncheckedUpdateInput>;
  };

  /**
   * interview delete
   */
  export type interviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interview
     */
    select?: interviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interviewInclude<ExtArgs> | null;
    /**
     * Filter which interview to delete.
     */
    where: interviewWhereUniqueInput;
  };

  /**
   * interview deleteMany
   */
  export type interviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which interviews to delete
     */
    where?: interviewWhereInput;
  };

  /**
   * interview without action
   */
  export type interviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interview
     */
    select?: interviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interviewInclude<ExtArgs> | null;
  };

  /**
   * Model job_posting
   */

  export type AggregateJob_posting = {
    _count: Job_postingCountAggregateOutputType | null;
    _min: Job_postingMinAggregateOutputType | null;
    _max: Job_postingMaxAggregateOutputType | null;
  };

  export type Job_postingMinAggregateOutputType = {
    id: string | null;
    company_id: string | null;
    title: string | null;
    description: string | null;
    requirements: string | null;
    salary_range: string | null;
    posted_date: Date | null;
    closing_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Job_postingMaxAggregateOutputType = {
    id: string | null;
    company_id: string | null;
    title: string | null;
    description: string | null;
    requirements: string | null;
    salary_range: string | null;
    posted_date: Date | null;
    closing_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Job_postingCountAggregateOutputType = {
    id: number;
    company_id: number;
    title: number;
    description: number;
    requirements: number;
    salary_range: number;
    posted_date: number;
    closing_date: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Job_postingMinAggregateInputType = {
    id?: true;
    company_id?: true;
    title?: true;
    description?: true;
    requirements?: true;
    salary_range?: true;
    posted_date?: true;
    closing_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Job_postingMaxAggregateInputType = {
    id?: true;
    company_id?: true;
    title?: true;
    description?: true;
    requirements?: true;
    salary_range?: true;
    posted_date?: true;
    closing_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Job_postingCountAggregateInputType = {
    id?: true;
    company_id?: true;
    title?: true;
    description?: true;
    requirements?: true;
    salary_range?: true;
    posted_date?: true;
    closing_date?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Job_postingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_posting to aggregate.
     */
    where?: job_postingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_postings to fetch.
     */
    orderBy?: job_postingOrderByWithRelationInput | job_postingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: job_postingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_postings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_postings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned job_postings
     **/
    _count?: true | Job_postingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Job_postingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Job_postingMaxAggregateInputType;
  };

  export type GetJob_postingAggregateType<T extends Job_postingAggregateArgs> = {
    [P in keyof T & keyof AggregateJob_posting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_posting[P]>
      : GetScalarType<T[P], AggregateJob_posting[P]>;
  };

  export type job_postingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_postingWhereInput;
    orderBy?: job_postingOrderByWithAggregationInput | job_postingOrderByWithAggregationInput[];
    by: Job_postingScalarFieldEnum[] | Job_postingScalarFieldEnum;
    having?: job_postingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Job_postingCountAggregateInputType | true;
    _min?: Job_postingMinAggregateInputType;
    _max?: Job_postingMaxAggregateInputType;
  };

  export type Job_postingGroupByOutputType = {
    id: string;
    company_id: string;
    title: string | null;
    description: string | null;
    requirements: string | null;
    salary_range: string | null;
    posted_date: Date | null;
    closing_date: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: Job_postingCountAggregateOutputType | null;
    _min: Job_postingMinAggregateOutputType | null;
    _max: Job_postingMaxAggregateOutputType | null;
  };

  type GetJob_postingGroupByPayload<T extends job_postingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_postingGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Job_postingGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Job_postingGroupByOutputType[P]>
          : GetScalarType<T[P], Job_postingGroupByOutputType[P]>;
      }
    >
  >;

  export type job_postingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        company_id?: boolean;
        title?: boolean;
        description?: boolean;
        requirements?: boolean;
        salary_range?: boolean;
        posted_date?: boolean;
        closing_date?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        interview?: boolean | job_posting$interviewArgs<ExtArgs>;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        _count?: boolean | Job_postingCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['job_posting']
    >;

  export type job_postingSelectScalar = {
    id?: boolean;
    company_id?: boolean;
    title?: boolean;
    description?: boolean;
    requirements?: boolean;
    salary_range?: boolean;
    posted_date?: boolean;
    closing_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type job_postingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | job_posting$interviewArgs<ExtArgs>;
    company?: boolean | companyDefaultArgs<ExtArgs>;
    _count?: boolean | Job_postingCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $job_postingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'job_posting';
    objects: {
      interview: Prisma.$interviewPayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        company_id: string;
        title: string | null;
        description: string | null;
        requirements: string | null;
        salary_range: string | null;
        posted_date: Date | null;
        closing_date: Date | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['job_posting']
    >;
    composites: {};
  };

  type job_postingGetPayload<S extends boolean | null | undefined | job_postingDefaultArgs> = $Result.GetResult<
    Prisma.$job_postingPayload,
    S
  >;

  type job_postingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    job_postingFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Job_postingCountAggregateInputType | true;
  };

  export interface job_postingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job_posting']; meta: { name: 'job_posting' } };
    /**
     * Find zero or one Job_posting that matches the filter.
     * @param {job_postingFindUniqueArgs} args - Arguments to find a Job_posting
     * @example
     * // Get one Job_posting
     * const job_posting = await prisma.job_posting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends job_postingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, job_postingFindUniqueArgs<ExtArgs>>,
    ): Prisma__job_postingClient<
      $Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Job_posting that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {job_postingFindUniqueOrThrowArgs} args - Arguments to find a Job_posting
     * @example
     * // Get one Job_posting
     * const job_posting = await prisma.job_posting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends job_postingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_postingFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__job_postingClient<
      $Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Job_posting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_postingFindFirstArgs} args - Arguments to find a Job_posting
     * @example
     * // Get one Job_posting
     * const job_posting = await prisma.job_posting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends job_postingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, job_postingFindFirstArgs<ExtArgs>>,
    ): Prisma__job_postingClient<
      $Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Job_posting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_postingFindFirstOrThrowArgs} args - Arguments to find a Job_posting
     * @example
     * // Get one Job_posting
     * const job_posting = await prisma.job_posting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends job_postingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_postingFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__job_postingClient<
      $Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Job_postings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_postingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_postings
     * const job_postings = await prisma.job_posting.findMany()
     *
     * // Get first 10 Job_postings
     * const job_postings = await prisma.job_posting.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const job_postingWithIdOnly = await prisma.job_posting.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends job_postingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_postingFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Job_posting.
     * @param {job_postingCreateArgs} args - Arguments to create a Job_posting.
     * @example
     * // Create one Job_posting
     * const Job_posting = await prisma.job_posting.create({
     *   data: {
     *     // ... data to create a Job_posting
     *   }
     * })
     *
     **/
    create<T extends job_postingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, job_postingCreateArgs<ExtArgs>>,
    ): Prisma__job_postingClient<$Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Job_postings.
     *     @param {job_postingCreateManyArgs} args - Arguments to create many Job_postings.
     *     @example
     *     // Create many Job_postings
     *     const job_posting = await prisma.job_posting.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends job_postingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_postingCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Job_posting.
     * @param {job_postingDeleteArgs} args - Arguments to delete one Job_posting.
     * @example
     * // Delete one Job_posting
     * const Job_posting = await prisma.job_posting.delete({
     *   where: {
     *     // ... filter to delete one Job_posting
     *   }
     * })
     *
     **/
    delete<T extends job_postingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, job_postingDeleteArgs<ExtArgs>>,
    ): Prisma__job_postingClient<$Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Job_posting.
     * @param {job_postingUpdateArgs} args - Arguments to update one Job_posting.
     * @example
     * // Update one Job_posting
     * const job_posting = await prisma.job_posting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends job_postingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, job_postingUpdateArgs<ExtArgs>>,
    ): Prisma__job_postingClient<$Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Job_postings.
     * @param {job_postingDeleteManyArgs} args - Arguments to filter Job_postings to delete.
     * @example
     * // Delete a few Job_postings
     * const { count } = await prisma.job_posting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends job_postingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_postingDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Job_postings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_postingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_postings
     * const job_posting = await prisma.job_posting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends job_postingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, job_postingUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Job_posting.
     * @param {job_postingUpsertArgs} args - Arguments to update or create a Job_posting.
     * @example
     * // Update or create a Job_posting
     * const job_posting = await prisma.job_posting.upsert({
     *   create: {
     *     // ... data to create a Job_posting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_posting we want to update
     *   }
     * })
     **/
    upsert<T extends job_postingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, job_postingUpsertArgs<ExtArgs>>,
    ): Prisma__job_postingClient<$Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Job_postings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_postingCountArgs} args - Arguments to filter Job_postings to count.
     * @example
     * // Count the number of Job_postings
     * const count = await prisma.job_posting.count({
     *   where: {
     *     // ... the filter for the Job_postings we want to count
     *   }
     * })
     **/
    count<T extends job_postingCountArgs>(
      args?: Subset<T, job_postingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_postingCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Job_posting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_postingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Job_postingAggregateArgs>(
      args: Subset<T, Job_postingAggregateArgs>,
    ): Prisma.PrismaPromise<GetJob_postingAggregateType<T>>;

    /**
     * Group by Job_posting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_postingGroupByArgs} args - Group by arguments.
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
      T extends job_postingGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: job_postingGroupByArgs['orderBy'] }
        : { orderBy?: job_postingGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, job_postingGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetJob_postingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the job_posting model
     */
    readonly fields: job_postingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job_posting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__job_postingClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    interview<T extends job_posting$interviewArgs<ExtArgs> = {}>(
      args?: Subset<T, job_posting$interviewArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the job_posting model
   */
  interface job_postingFieldRefs {
    readonly id: FieldRef<'job_posting', 'String'>;
    readonly company_id: FieldRef<'job_posting', 'String'>;
    readonly title: FieldRef<'job_posting', 'String'>;
    readonly description: FieldRef<'job_posting', 'String'>;
    readonly requirements: FieldRef<'job_posting', 'String'>;
    readonly salary_range: FieldRef<'job_posting', 'String'>;
    readonly posted_date: FieldRef<'job_posting', 'DateTime'>;
    readonly closing_date: FieldRef<'job_posting', 'DateTime'>;
    readonly created_at: FieldRef<'job_posting', 'DateTime'>;
    readonly updated_at: FieldRef<'job_posting', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * job_posting findUnique
   */
  export type job_postingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    /**
     * Filter, which job_posting to fetch.
     */
    where: job_postingWhereUniqueInput;
  };

  /**
   * job_posting findUniqueOrThrow
   */
  export type job_postingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    /**
     * Filter, which job_posting to fetch.
     */
    where: job_postingWhereUniqueInput;
  };

  /**
   * job_posting findFirst
   */
  export type job_postingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    /**
     * Filter, which job_posting to fetch.
     */
    where?: job_postingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_postings to fetch.
     */
    orderBy?: job_postingOrderByWithRelationInput | job_postingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for job_postings.
     */
    cursor?: job_postingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_postings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_postings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of job_postings.
     */
    distinct?: Job_postingScalarFieldEnum | Job_postingScalarFieldEnum[];
  };

  /**
   * job_posting findFirstOrThrow
   */
  export type job_postingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    /**
     * Filter, which job_posting to fetch.
     */
    where?: job_postingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_postings to fetch.
     */
    orderBy?: job_postingOrderByWithRelationInput | job_postingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for job_postings.
     */
    cursor?: job_postingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_postings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_postings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of job_postings.
     */
    distinct?: Job_postingScalarFieldEnum | Job_postingScalarFieldEnum[];
  };

  /**
   * job_posting findMany
   */
  export type job_postingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    /**
     * Filter, which job_postings to fetch.
     */
    where?: job_postingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_postings to fetch.
     */
    orderBy?: job_postingOrderByWithRelationInput | job_postingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing job_postings.
     */
    cursor?: job_postingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_postings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_postings.
     */
    skip?: number;
    distinct?: Job_postingScalarFieldEnum | Job_postingScalarFieldEnum[];
  };

  /**
   * job_posting create
   */
  export type job_postingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    /**
     * The data needed to create a job_posting.
     */
    data: XOR<job_postingCreateInput, job_postingUncheckedCreateInput>;
  };

  /**
   * job_posting createMany
   */
  export type job_postingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many job_postings.
     */
    data: job_postingCreateManyInput | job_postingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * job_posting update
   */
  export type job_postingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    /**
     * The data needed to update a job_posting.
     */
    data: XOR<job_postingUpdateInput, job_postingUncheckedUpdateInput>;
    /**
     * Choose, which job_posting to update.
     */
    where: job_postingWhereUniqueInput;
  };

  /**
   * job_posting updateMany
   */
  export type job_postingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update job_postings.
     */
    data: XOR<job_postingUpdateManyMutationInput, job_postingUncheckedUpdateManyInput>;
    /**
     * Filter which job_postings to update
     */
    where?: job_postingWhereInput;
  };

  /**
   * job_posting upsert
   */
  export type job_postingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    /**
     * The filter to search for the job_posting to update in case it exists.
     */
    where: job_postingWhereUniqueInput;
    /**
     * In case the job_posting found by the `where` argument doesn't exist, create a new job_posting with this data.
     */
    create: XOR<job_postingCreateInput, job_postingUncheckedCreateInput>;
    /**
     * In case the job_posting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<job_postingUpdateInput, job_postingUncheckedUpdateInput>;
  };

  /**
   * job_posting delete
   */
  export type job_postingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    /**
     * Filter which job_posting to delete.
     */
    where: job_postingWhereUniqueInput;
  };

  /**
   * job_posting deleteMany
   */
  export type job_postingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_postings to delete
     */
    where?: job_postingWhereInput;
  };

  /**
   * job_posting.interview
   */
  export type job_posting$interviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interview
     */
    select?: interviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interviewInclude<ExtArgs> | null;
    where?: interviewWhereInput;
    orderBy?: interviewOrderByWithRelationInput | interviewOrderByWithRelationInput[];
    cursor?: interviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[];
  };

  /**
   * job_posting without action
   */
  export type job_postingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
  };

  /**
   * Model owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null;
    _avg: OwnerAvgAggregateOutputType | null;
    _sum: OwnerSumAggregateOutputType | null;
    _min: OwnerMinAggregateOutputType | null;
    _max: OwnerMaxAggregateOutputType | null;
  };

  export type OwnerAvgAggregateOutputType = {
    salary: number | null;
  };

  export type OwnerSumAggregateOutputType = {
    salary: number | null;
  };

  export type OwnerMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    company_id: string | null;
    position: string | null;
    hired_date: Date | null;
    salary: number | null;
    benefits: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OwnerMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    company_id: string | null;
    position: string | null;
    hired_date: Date | null;
    salary: number | null;
    benefits: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OwnerCountAggregateOutputType = {
    id: number;
    user_id: number;
    company_id: number;
    position: number;
    hired_date: number;
    salary: number;
    benefits: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type OwnerAvgAggregateInputType = {
    salary?: true;
  };

  export type OwnerSumAggregateInputType = {
    salary?: true;
  };

  export type OwnerMinAggregateInputType = {
    id?: true;
    user_id?: true;
    company_id?: true;
    position?: true;
    hired_date?: true;
    salary?: true;
    benefits?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OwnerMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    company_id?: true;
    position?: true;
    hired_date?: true;
    salary?: true;
    benefits?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OwnerCountAggregateInputType = {
    id?: true;
    user_id?: true;
    company_id?: true;
    position?: true;
    hired_date?: true;
    salary?: true;
    benefits?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type OwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which owner to aggregate.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned owners
     **/
    _count?: true | OwnerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OwnerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OwnerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OwnerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OwnerMaxAggregateInputType;
  };

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
    [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>;
  };

  export type ownerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ownerWhereInput;
    orderBy?: ownerOrderByWithAggregationInput | ownerOrderByWithAggregationInput[];
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum;
    having?: ownerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OwnerCountAggregateInputType | true;
    _avg?: OwnerAvgAggregateInputType;
    _sum?: OwnerSumAggregateInputType;
    _min?: OwnerMinAggregateInputType;
    _max?: OwnerMaxAggregateInputType;
  };

  export type OwnerGroupByOutputType = {
    id: string;
    user_id: string;
    company_id: string;
    position: string | null;
    hired_date: Date | null;
    salary: number | null;
    benefits: string | null;
    created_at: Date;
    updated_at: Date;
    _count: OwnerCountAggregateOutputType | null;
    _avg: OwnerAvgAggregateOutputType | null;
    _sum: OwnerSumAggregateOutputType | null;
    _min: OwnerMinAggregateOutputType | null;
    _max: OwnerMaxAggregateOutputType | null;
  };

  type GetOwnerGroupByPayload<T extends ownerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OwnerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
          : GetScalarType<T[P], OwnerGroupByOutputType[P]>;
      }
    >
  >;

  export type ownerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      company_id?: boolean;
      position?: boolean;
      hired_date?: boolean;
      salary?: boolean;
      benefits?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | companyDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['owner']
  >;

  export type ownerSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    company_id?: boolean;
    position?: boolean;
    hired_date?: boolean;
    salary?: boolean;
    benefits?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type ownerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $ownerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'owner';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        company_id: string;
        position: string | null;
        hired_date: Date | null;
        salary: number | null;
        benefits: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['owner']
    >;
    composites: {};
  };

  type ownerGetPayload<S extends boolean | null | undefined | ownerDefaultArgs> = $Result.GetResult<
    Prisma.$ownerPayload,
    S
  >;

  type ownerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ownerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OwnerCountAggregateInputType | true;
  };

  export interface ownerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['owner']; meta: { name: 'owner' } };
    /**
     * Find zero or one Owner that matches the filter.
     * @param {ownerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends ownerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ownerFindUniqueArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Owner that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {ownerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends ownerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends ownerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindFirstArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends ownerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     *
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends ownerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Owner.
     * @param {ownerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     *
     **/
    create<T extends ownerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ownerCreateArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Owners.
     *     @param {ownerCreateManyArgs} args - Arguments to create many Owners.
     *     @example
     *     // Create many Owners
     *     const owner = await prisma.owner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends ownerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Owner.
     * @param {ownerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     *
     **/
    delete<T extends ownerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ownerDeleteArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Owner.
     * @param {ownerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends ownerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ownerUpdateArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Owners.
     * @param {ownerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends ownerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends ownerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ownerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Owner.
     * @param {ownerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
     **/
    upsert<T extends ownerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ownerUpsertArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
     **/
    count<T extends ownerCountArgs>(
      args?: Subset<T, ownerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OwnerAggregateArgs>(
      args: Subset<T, OwnerAggregateArgs>,
    ): Prisma.PrismaPromise<GetOwnerAggregateType<T>>;

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerGroupByArgs} args - Group by arguments.
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
      T extends ownerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ownerGroupByArgs['orderBy'] }
        : { orderBy?: ownerGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, ownerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the owner model
     */
    readonly fields: ownerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ownerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the owner model
   */
  interface ownerFieldRefs {
    readonly id: FieldRef<'owner', 'String'>;
    readonly user_id: FieldRef<'owner', 'String'>;
    readonly company_id: FieldRef<'owner', 'String'>;
    readonly position: FieldRef<'owner', 'String'>;
    readonly hired_date: FieldRef<'owner', 'DateTime'>;
    readonly salary: FieldRef<'owner', 'Int'>;
    readonly benefits: FieldRef<'owner', 'String'>;
    readonly created_at: FieldRef<'owner', 'DateTime'>;
    readonly updated_at: FieldRef<'owner', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * owner findUnique
   */
  export type ownerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner findUniqueOrThrow
   */
  export type ownerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner findFirst
   */
  export type ownerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for owners.
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * owner findFirstOrThrow
   */
  export type ownerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for owners.
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * owner findMany
   */
  export type ownerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owners to fetch.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing owners.
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * owner create
   */
  export type ownerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * The data needed to create a owner.
     */
    data: XOR<ownerCreateInput, ownerUncheckedCreateInput>;
  };

  /**
   * owner createMany
   */
  export type ownerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many owners.
     */
    data: ownerCreateManyInput | ownerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * owner update
   */
  export type ownerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * The data needed to update a owner.
     */
    data: XOR<ownerUpdateInput, ownerUncheckedUpdateInput>;
    /**
     * Choose, which owner to update.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner updateMany
   */
  export type ownerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update owners.
     */
    data: XOR<ownerUpdateManyMutationInput, ownerUncheckedUpdateManyInput>;
    /**
     * Filter which owners to update
     */
    where?: ownerWhereInput;
  };

  /**
   * owner upsert
   */
  export type ownerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * The filter to search for the owner to update in case it exists.
     */
    where: ownerWhereUniqueInput;
    /**
     * In case the owner found by the `where` argument doesn't exist, create a new owner with this data.
     */
    create: XOR<ownerCreateInput, ownerUncheckedCreateInput>;
    /**
     * In case the owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ownerUpdateInput, ownerUncheckedUpdateInput>;
  };

  /**
   * owner delete
   */
  export type ownerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter which owner to delete.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner deleteMany
   */
  export type ownerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which owners to delete
     */
    where?: ownerWhereInput;
  };

  /**
   * owner without action
   */
  export type ownerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    company_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    company_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    company_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    company_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    company_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    company_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    company_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      company_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      applicant?: boolean | user$applicantArgs<ExtArgs>;
      interview?: boolean | user$interviewArgs<ExtArgs>;
      owner?: boolean | user$ownerArgs<ExtArgs>;
      company?: boolean | user$companyArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    company_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | user$applicantArgs<ExtArgs>;
    interview?: boolean | user$interviewArgs<ExtArgs>;
    owner?: boolean | user$ownerArgs<ExtArgs>;
    company?: boolean | user$companyArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      applicant: Prisma.$applicantPayload<ExtArgs>[];
      interview: Prisma.$interviewPayload<ExtArgs>[];
      owner: Prisma.$ownerPayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        company_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    applicant<T extends user$applicantArgs<ExtArgs> = {}>(
      args?: Subset<T, user$applicantArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findMany'> | Null>;

    interview<T extends user$interviewArgs<ExtArgs> = {}>(
      args?: Subset<T, user$interviewArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    owner<T extends user$ownerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$ownerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly company_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.applicant
   */
  export type user$applicantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    where?: applicantWhereInput;
    orderBy?: applicantOrderByWithRelationInput | applicantOrderByWithRelationInput[];
    cursor?: applicantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * user.interview
   */
  export type user$interviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interview
     */
    select?: interviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interviewInclude<ExtArgs> | null;
    where?: interviewWhereInput;
    orderBy?: interviewOrderByWithRelationInput | interviewOrderByWithRelationInput[];
    cursor?: interviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[];
  };

  /**
   * user.owner
   */
  export type user$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    where?: ownerWhereInput;
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    cursor?: ownerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const ApplicantScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    resume: 'resume';
    application_date: 'application_date';
    status: 'status';
    position_applied: 'position_applied';
    interview_date: 'interview_date';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ApplicantScalarFieldEnum = (typeof ApplicantScalarFieldEnum)[keyof typeof ApplicantScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    industry: 'industry';
    size: 'size';
    founded_year: 'founded_year';
    website_url: 'website_url';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const InterviewScalarFieldEnum: {
    id: 'id';
    applicant_id: 'applicant_id';
    interviewer_id: 'interviewer_id';
    job_posting_id: 'job_posting_id';
    date: 'date';
    feedback: 'feedback';
    result: 'result';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type InterviewScalarFieldEnum = (typeof InterviewScalarFieldEnum)[keyof typeof InterviewScalarFieldEnum];

  export const Job_postingScalarFieldEnum: {
    id: 'id';
    company_id: 'company_id';
    title: 'title';
    description: 'description';
    requirements: 'requirements';
    salary_range: 'salary_range';
    posted_date: 'posted_date';
    closing_date: 'closing_date';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Job_postingScalarFieldEnum = (typeof Job_postingScalarFieldEnum)[keyof typeof Job_postingScalarFieldEnum];

  export const OwnerScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    company_id: 'company_id';
    position: 'position';
    hired_date: 'hired_date';
    salary: 'salary';
    benefits: 'benefits';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    company_id: 'company_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type applicantWhereInput = {
    AND?: applicantWhereInput | applicantWhereInput[];
    OR?: applicantWhereInput[];
    NOT?: applicantWhereInput | applicantWhereInput[];
    id?: UuidFilter<'applicant'> | string;
    user_id?: UuidFilter<'applicant'> | string;
    resume?: StringNullableFilter<'applicant'> | string | null;
    application_date?: DateTimeNullableFilter<'applicant'> | Date | string | null;
    status?: StringNullableFilter<'applicant'> | string | null;
    position_applied?: StringNullableFilter<'applicant'> | string | null;
    interview_date?: DateTimeNullableFilter<'applicant'> | Date | string | null;
    created_at?: DateTimeFilter<'applicant'> | Date | string;
    updated_at?: DateTimeFilter<'applicant'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    interview?: InterviewListRelationFilter;
  };

  export type applicantOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    resume?: SortOrderInput | SortOrder;
    application_date?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    position_applied?: SortOrderInput | SortOrder;
    interview_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    interview?: interviewOrderByRelationAggregateInput;
  };

  export type applicantWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: applicantWhereInput | applicantWhereInput[];
      OR?: applicantWhereInput[];
      NOT?: applicantWhereInput | applicantWhereInput[];
      user_id?: UuidFilter<'applicant'> | string;
      resume?: StringNullableFilter<'applicant'> | string | null;
      application_date?: DateTimeNullableFilter<'applicant'> | Date | string | null;
      status?: StringNullableFilter<'applicant'> | string | null;
      position_applied?: StringNullableFilter<'applicant'> | string | null;
      interview_date?: DateTimeNullableFilter<'applicant'> | Date | string | null;
      created_at?: DateTimeFilter<'applicant'> | Date | string;
      updated_at?: DateTimeFilter<'applicant'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      interview?: InterviewListRelationFilter;
    },
    'id'
  >;

  export type applicantOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    resume?: SortOrderInput | SortOrder;
    application_date?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    position_applied?: SortOrderInput | SortOrder;
    interview_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: applicantCountOrderByAggregateInput;
    _max?: applicantMaxOrderByAggregateInput;
    _min?: applicantMinOrderByAggregateInput;
  };

  export type applicantScalarWhereWithAggregatesInput = {
    AND?: applicantScalarWhereWithAggregatesInput | applicantScalarWhereWithAggregatesInput[];
    OR?: applicantScalarWhereWithAggregatesInput[];
    NOT?: applicantScalarWhereWithAggregatesInput | applicantScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'applicant'> | string;
    user_id?: UuidWithAggregatesFilter<'applicant'> | string;
    resume?: StringNullableWithAggregatesFilter<'applicant'> | string | null;
    application_date?: DateTimeNullableWithAggregatesFilter<'applicant'> | Date | string | null;
    status?: StringNullableWithAggregatesFilter<'applicant'> | string | null;
    position_applied?: StringNullableWithAggregatesFilter<'applicant'> | string | null;
    interview_date?: DateTimeNullableWithAggregatesFilter<'applicant'> | Date | string | null;
    created_at?: DateTimeWithAggregatesFilter<'applicant'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'applicant'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    industry?: StringNullableFilter<'company'> | string | null;
    size?: IntNullableFilter<'company'> | number | null;
    founded_year?: IntNullableFilter<'company'> | number | null;
    website_url?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    job_posting?: Job_postingListRelationFilter;
    owner?: OwnerListRelationFilter;
    user?: UserListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    industry?: SortOrderInput | SortOrder;
    size?: SortOrderInput | SortOrder;
    founded_year?: SortOrderInput | SortOrder;
    website_url?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    job_posting?: job_postingOrderByRelationAggregateInput;
    owner?: ownerOrderByRelationAggregateInput;
    user?: userOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      address?: StringNullableFilter<'company'> | string | null;
      industry?: StringNullableFilter<'company'> | string | null;
      size?: IntNullableFilter<'company'> | number | null;
      founded_year?: IntNullableFilter<'company'> | number | null;
      website_url?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      job_posting?: Job_postingListRelationFilter;
      owner?: OwnerListRelationFilter;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    industry?: SortOrderInput | SortOrder;
    size?: SortOrderInput | SortOrder;
    founded_year?: SortOrderInput | SortOrder;
    website_url?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _avg?: companyAvgOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
    _sum?: companySumOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    address?: StringNullableWithAggregatesFilter<'company'> | string | null;
    industry?: StringNullableWithAggregatesFilter<'company'> | string | null;
    size?: IntNullableWithAggregatesFilter<'company'> | number | null;
    founded_year?: IntNullableWithAggregatesFilter<'company'> | number | null;
    website_url?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
  };

  export type interviewWhereInput = {
    AND?: interviewWhereInput | interviewWhereInput[];
    OR?: interviewWhereInput[];
    NOT?: interviewWhereInput | interviewWhereInput[];
    id?: UuidFilter<'interview'> | string;
    applicant_id?: UuidFilter<'interview'> | string;
    interviewer_id?: UuidFilter<'interview'> | string;
    job_posting_id?: UuidFilter<'interview'> | string;
    date?: DateTimeNullableFilter<'interview'> | Date | string | null;
    feedback?: StringNullableFilter<'interview'> | string | null;
    result?: StringNullableFilter<'interview'> | string | null;
    created_at?: DateTimeFilter<'interview'> | Date | string;
    updated_at?: DateTimeFilter<'interview'> | Date | string;
    applicant?: XOR<ApplicantRelationFilter, applicantWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    job_posting?: XOR<Job_postingRelationFilter, job_postingWhereInput>;
  };

  export type interviewOrderByWithRelationInput = {
    id?: SortOrder;
    applicant_id?: SortOrder;
    interviewer_id?: SortOrder;
    job_posting_id?: SortOrder;
    date?: SortOrderInput | SortOrder;
    feedback?: SortOrderInput | SortOrder;
    result?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    applicant?: applicantOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    job_posting?: job_postingOrderByWithRelationInput;
  };

  export type interviewWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: interviewWhereInput | interviewWhereInput[];
      OR?: interviewWhereInput[];
      NOT?: interviewWhereInput | interviewWhereInput[];
      applicant_id?: UuidFilter<'interview'> | string;
      interviewer_id?: UuidFilter<'interview'> | string;
      job_posting_id?: UuidFilter<'interview'> | string;
      date?: DateTimeNullableFilter<'interview'> | Date | string | null;
      feedback?: StringNullableFilter<'interview'> | string | null;
      result?: StringNullableFilter<'interview'> | string | null;
      created_at?: DateTimeFilter<'interview'> | Date | string;
      updated_at?: DateTimeFilter<'interview'> | Date | string;
      applicant?: XOR<ApplicantRelationFilter, applicantWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      job_posting?: XOR<Job_postingRelationFilter, job_postingWhereInput>;
    },
    'id'
  >;

  export type interviewOrderByWithAggregationInput = {
    id?: SortOrder;
    applicant_id?: SortOrder;
    interviewer_id?: SortOrder;
    job_posting_id?: SortOrder;
    date?: SortOrderInput | SortOrder;
    feedback?: SortOrderInput | SortOrder;
    result?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: interviewCountOrderByAggregateInput;
    _max?: interviewMaxOrderByAggregateInput;
    _min?: interviewMinOrderByAggregateInput;
  };

  export type interviewScalarWhereWithAggregatesInput = {
    AND?: interviewScalarWhereWithAggregatesInput | interviewScalarWhereWithAggregatesInput[];
    OR?: interviewScalarWhereWithAggregatesInput[];
    NOT?: interviewScalarWhereWithAggregatesInput | interviewScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'interview'> | string;
    applicant_id?: UuidWithAggregatesFilter<'interview'> | string;
    interviewer_id?: UuidWithAggregatesFilter<'interview'> | string;
    job_posting_id?: UuidWithAggregatesFilter<'interview'> | string;
    date?: DateTimeNullableWithAggregatesFilter<'interview'> | Date | string | null;
    feedback?: StringNullableWithAggregatesFilter<'interview'> | string | null;
    result?: StringNullableWithAggregatesFilter<'interview'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'interview'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'interview'> | Date | string;
  };

  export type job_postingWhereInput = {
    AND?: job_postingWhereInput | job_postingWhereInput[];
    OR?: job_postingWhereInput[];
    NOT?: job_postingWhereInput | job_postingWhereInput[];
    id?: UuidFilter<'job_posting'> | string;
    company_id?: UuidFilter<'job_posting'> | string;
    title?: StringNullableFilter<'job_posting'> | string | null;
    description?: StringNullableFilter<'job_posting'> | string | null;
    requirements?: StringNullableFilter<'job_posting'> | string | null;
    salary_range?: StringNullableFilter<'job_posting'> | string | null;
    posted_date?: DateTimeNullableFilter<'job_posting'> | Date | string | null;
    closing_date?: DateTimeNullableFilter<'job_posting'> | Date | string | null;
    created_at?: DateTimeFilter<'job_posting'> | Date | string;
    updated_at?: DateTimeFilter<'job_posting'> | Date | string;
    interview?: InterviewListRelationFilter;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
  };

  export type job_postingOrderByWithRelationInput = {
    id?: SortOrder;
    company_id?: SortOrder;
    title?: SortOrderInput | SortOrder;
    description?: SortOrderInput | SortOrder;
    requirements?: SortOrderInput | SortOrder;
    salary_range?: SortOrderInput | SortOrder;
    posted_date?: SortOrderInput | SortOrder;
    closing_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    interview?: interviewOrderByRelationAggregateInput;
    company?: companyOrderByWithRelationInput;
  };

  export type job_postingWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: job_postingWhereInput | job_postingWhereInput[];
      OR?: job_postingWhereInput[];
      NOT?: job_postingWhereInput | job_postingWhereInput[];
      company_id?: UuidFilter<'job_posting'> | string;
      title?: StringNullableFilter<'job_posting'> | string | null;
      description?: StringNullableFilter<'job_posting'> | string | null;
      requirements?: StringNullableFilter<'job_posting'> | string | null;
      salary_range?: StringNullableFilter<'job_posting'> | string | null;
      posted_date?: DateTimeNullableFilter<'job_posting'> | Date | string | null;
      closing_date?: DateTimeNullableFilter<'job_posting'> | Date | string | null;
      created_at?: DateTimeFilter<'job_posting'> | Date | string;
      updated_at?: DateTimeFilter<'job_posting'> | Date | string;
      interview?: InterviewListRelationFilter;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
    },
    'id'
  >;

  export type job_postingOrderByWithAggregationInput = {
    id?: SortOrder;
    company_id?: SortOrder;
    title?: SortOrderInput | SortOrder;
    description?: SortOrderInput | SortOrder;
    requirements?: SortOrderInput | SortOrder;
    salary_range?: SortOrderInput | SortOrder;
    posted_date?: SortOrderInput | SortOrder;
    closing_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: job_postingCountOrderByAggregateInput;
    _max?: job_postingMaxOrderByAggregateInput;
    _min?: job_postingMinOrderByAggregateInput;
  };

  export type job_postingScalarWhereWithAggregatesInput = {
    AND?: job_postingScalarWhereWithAggregatesInput | job_postingScalarWhereWithAggregatesInput[];
    OR?: job_postingScalarWhereWithAggregatesInput[];
    NOT?: job_postingScalarWhereWithAggregatesInput | job_postingScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'job_posting'> | string;
    company_id?: UuidWithAggregatesFilter<'job_posting'> | string;
    title?: StringNullableWithAggregatesFilter<'job_posting'> | string | null;
    description?: StringNullableWithAggregatesFilter<'job_posting'> | string | null;
    requirements?: StringNullableWithAggregatesFilter<'job_posting'> | string | null;
    salary_range?: StringNullableWithAggregatesFilter<'job_posting'> | string | null;
    posted_date?: DateTimeNullableWithAggregatesFilter<'job_posting'> | Date | string | null;
    closing_date?: DateTimeNullableWithAggregatesFilter<'job_posting'> | Date | string | null;
    created_at?: DateTimeWithAggregatesFilter<'job_posting'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'job_posting'> | Date | string;
  };

  export type ownerWhereInput = {
    AND?: ownerWhereInput | ownerWhereInput[];
    OR?: ownerWhereInput[];
    NOT?: ownerWhereInput | ownerWhereInput[];
    id?: UuidFilter<'owner'> | string;
    user_id?: UuidFilter<'owner'> | string;
    company_id?: UuidFilter<'owner'> | string;
    position?: StringNullableFilter<'owner'> | string | null;
    hired_date?: DateTimeNullableFilter<'owner'> | Date | string | null;
    salary?: IntNullableFilter<'owner'> | number | null;
    benefits?: StringNullableFilter<'owner'> | string | null;
    created_at?: DateTimeFilter<'owner'> | Date | string;
    updated_at?: DateTimeFilter<'owner'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type ownerOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    position?: SortOrderInput | SortOrder;
    hired_date?: SortOrderInput | SortOrder;
    salary?: SortOrderInput | SortOrder;
    benefits?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type ownerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ownerWhereInput | ownerWhereInput[];
      OR?: ownerWhereInput[];
      NOT?: ownerWhereInput | ownerWhereInput[];
      user_id?: UuidFilter<'owner'> | string;
      company_id?: UuidFilter<'owner'> | string;
      position?: StringNullableFilter<'owner'> | string | null;
      hired_date?: DateTimeNullableFilter<'owner'> | Date | string | null;
      salary?: IntNullableFilter<'owner'> | number | null;
      benefits?: StringNullableFilter<'owner'> | string | null;
      created_at?: DateTimeFilter<'owner'> | Date | string;
      updated_at?: DateTimeFilter<'owner'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type ownerOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    position?: SortOrderInput | SortOrder;
    hired_date?: SortOrderInput | SortOrder;
    salary?: SortOrderInput | SortOrder;
    benefits?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: ownerCountOrderByAggregateInput;
    _avg?: ownerAvgOrderByAggregateInput;
    _max?: ownerMaxOrderByAggregateInput;
    _min?: ownerMinOrderByAggregateInput;
    _sum?: ownerSumOrderByAggregateInput;
  };

  export type ownerScalarWhereWithAggregatesInput = {
    AND?: ownerScalarWhereWithAggregatesInput | ownerScalarWhereWithAggregatesInput[];
    OR?: ownerScalarWhereWithAggregatesInput[];
    NOT?: ownerScalarWhereWithAggregatesInput | ownerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'owner'> | string;
    user_id?: UuidWithAggregatesFilter<'owner'> | string;
    company_id?: UuidWithAggregatesFilter<'owner'> | string;
    position?: StringNullableWithAggregatesFilter<'owner'> | string | null;
    hired_date?: DateTimeNullableWithAggregatesFilter<'owner'> | Date | string | null;
    salary?: IntNullableWithAggregatesFilter<'owner'> | number | null;
    benefits?: StringNullableWithAggregatesFilter<'owner'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'owner'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'owner'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    company_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    applicant?: ApplicantListRelationFilter;
    interview?: InterviewListRelationFilter;
    owner?: OwnerListRelationFilter;
    company?: XOR<CompanyNullableRelationFilter, companyWhereInput> | null;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    applicant?: applicantOrderByRelationAggregateInput;
    interview?: interviewOrderByRelationAggregateInput;
    owner?: ownerOrderByRelationAggregateInput;
    company?: companyOrderByWithRelationInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      company_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      applicant?: ApplicantListRelationFilter;
      interview?: InterviewListRelationFilter;
      owner?: OwnerListRelationFilter;
      company?: XOR<CompanyNullableRelationFilter, companyWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    company_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type applicantCreateInput = {
    id?: string;
    resume?: string | null;
    application_date?: Date | string | null;
    status?: string | null;
    position_applied?: string | null;
    interview_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutApplicantInput;
    interview?: interviewCreateNestedManyWithoutApplicantInput;
  };

  export type applicantUncheckedCreateInput = {
    id?: string;
    user_id: string;
    resume?: string | null;
    application_date?: Date | string | null;
    status?: string | null;
    position_applied?: string | null;
    interview_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    interview?: interviewUncheckedCreateNestedManyWithoutApplicantInput;
  };

  export type applicantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    position_applied?: NullableStringFieldUpdateOperationsInput | string | null;
    interview_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutApplicantNestedInput;
    interview?: interviewUpdateManyWithoutApplicantNestedInput;
  };

  export type applicantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    position_applied?: NullableStringFieldUpdateOperationsInput | string | null;
    interview_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    interview?: interviewUncheckedUpdateManyWithoutApplicantNestedInput;
  };

  export type applicantCreateManyInput = {
    id?: string;
    user_id: string;
    resume?: string | null;
    application_date?: Date | string | null;
    status?: string | null;
    position_applied?: string | null;
    interview_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    position_applied?: NullableStringFieldUpdateOperationsInput | string | null;
    interview_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    position_applied?: NullableStringFieldUpdateOperationsInput | string | null;
    interview_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    industry?: string | null;
    size?: number | null;
    founded_year?: number | null;
    website_url?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_posting?: job_postingCreateNestedManyWithoutCompanyInput;
    owner?: ownerCreateNestedManyWithoutCompanyInput;
    user?: userCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    industry?: string | null;
    size?: number | null;
    founded_year?: number | null;
    website_url?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_posting?: job_postingUncheckedCreateNestedManyWithoutCompanyInput;
    owner?: ownerUncheckedCreateNestedManyWithoutCompanyInput;
    user?: userUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    founded_year?: NullableIntFieldUpdateOperationsInput | number | null;
    website_url?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_posting?: job_postingUpdateManyWithoutCompanyNestedInput;
    owner?: ownerUpdateManyWithoutCompanyNestedInput;
    user?: userUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    founded_year?: NullableIntFieldUpdateOperationsInput | number | null;
    website_url?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_posting?: job_postingUncheckedUpdateManyWithoutCompanyNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutCompanyNestedInput;
    user?: userUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    industry?: string | null;
    size?: number | null;
    founded_year?: number | null;
    website_url?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    founded_year?: NullableIntFieldUpdateOperationsInput | number | null;
    website_url?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    founded_year?: NullableIntFieldUpdateOperationsInput | number | null;
    website_url?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type interviewCreateInput = {
    id?: string;
    date?: Date | string | null;
    feedback?: string | null;
    result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant: applicantCreateNestedOneWithoutInterviewInput;
    user: userCreateNestedOneWithoutInterviewInput;
    job_posting: job_postingCreateNestedOneWithoutInterviewInput;
  };

  export type interviewUncheckedCreateInput = {
    id?: string;
    applicant_id: string;
    interviewer_id: string;
    job_posting_id: string;
    date?: Date | string | null;
    feedback?: string | null;
    result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type interviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUpdateOneRequiredWithoutInterviewNestedInput;
    user?: userUpdateOneRequiredWithoutInterviewNestedInput;
    job_posting?: job_postingUpdateOneRequiredWithoutInterviewNestedInput;
  };

  export type interviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    applicant_id?: StringFieldUpdateOperationsInput | string;
    interviewer_id?: StringFieldUpdateOperationsInput | string;
    job_posting_id?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type interviewCreateManyInput = {
    id?: string;
    applicant_id: string;
    interviewer_id: string;
    job_posting_id: string;
    date?: Date | string | null;
    feedback?: string | null;
    result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type interviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type interviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    applicant_id?: StringFieldUpdateOperationsInput | string;
    interviewer_id?: StringFieldUpdateOperationsInput | string;
    job_posting_id?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_postingCreateInput = {
    id?: string;
    title?: string | null;
    description?: string | null;
    requirements?: string | null;
    salary_range?: string | null;
    posted_date?: Date | string | null;
    closing_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    interview?: interviewCreateNestedManyWithoutJob_postingInput;
    company: companyCreateNestedOneWithoutJob_postingInput;
  };

  export type job_postingUncheckedCreateInput = {
    id?: string;
    company_id: string;
    title?: string | null;
    description?: string | null;
    requirements?: string | null;
    salary_range?: string | null;
    posted_date?: Date | string | null;
    closing_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    interview?: interviewUncheckedCreateNestedManyWithoutJob_postingInput;
  };

  export type job_postingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    requirements?: NullableStringFieldUpdateOperationsInput | string | null;
    salary_range?: NullableStringFieldUpdateOperationsInput | string | null;
    posted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closing_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    interview?: interviewUpdateManyWithoutJob_postingNestedInput;
    company?: companyUpdateOneRequiredWithoutJob_postingNestedInput;
  };

  export type job_postingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    requirements?: NullableStringFieldUpdateOperationsInput | string | null;
    salary_range?: NullableStringFieldUpdateOperationsInput | string | null;
    posted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closing_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    interview?: interviewUncheckedUpdateManyWithoutJob_postingNestedInput;
  };

  export type job_postingCreateManyInput = {
    id?: string;
    company_id: string;
    title?: string | null;
    description?: string | null;
    requirements?: string | null;
    salary_range?: string | null;
    posted_date?: Date | string | null;
    closing_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_postingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    requirements?: NullableStringFieldUpdateOperationsInput | string | null;
    salary_range?: NullableStringFieldUpdateOperationsInput | string | null;
    posted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closing_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_postingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    requirements?: NullableStringFieldUpdateOperationsInput | string | null;
    salary_range?: NullableStringFieldUpdateOperationsInput | string | null;
    posted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closing_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerCreateInput = {
    id?: string;
    position?: string | null;
    hired_date?: Date | string | null;
    salary?: number | null;
    benefits?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutOwnerInput;
    user: userCreateNestedOneWithoutOwnerInput;
  };

  export type ownerUncheckedCreateInput = {
    id?: string;
    user_id: string;
    company_id: string;
    position?: string | null;
    hired_date?: Date | string | null;
    salary?: number | null;
    benefits?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    hired_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    benefits?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutOwnerNestedInput;
    user?: userUpdateOneRequiredWithoutOwnerNestedInput;
  };

  export type ownerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    hired_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    benefits?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerCreateManyInput = {
    id?: string;
    user_id: string;
    company_id: string;
    position?: string | null;
    hired_date?: Date | string | null;
    salary?: number | null;
    benefits?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    hired_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    benefits?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    hired_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    benefits?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantCreateNestedManyWithoutUserInput;
    interview?: interviewCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantUncheckedCreateNestedManyWithoutUserInput;
    interview?: interviewUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUpdateManyWithoutUserNestedInput;
    interview?: interviewUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
    company?: companyUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUncheckedUpdateManyWithoutUserNestedInput;
    interview?: interviewUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type InterviewListRelationFilter = {
    every?: interviewWhereInput;
    some?: interviewWhereInput;
    none?: interviewWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type interviewOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type applicantCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    resume?: SortOrder;
    application_date?: SortOrder;
    status?: SortOrder;
    position_applied?: SortOrder;
    interview_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type applicantMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    resume?: SortOrder;
    application_date?: SortOrder;
    status?: SortOrder;
    position_applied?: SortOrder;
    interview_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type applicantMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    resume?: SortOrder;
    application_date?: SortOrder;
    status?: SortOrder;
    position_applied?: SortOrder;
    interview_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type Job_postingListRelationFilter = {
    every?: job_postingWhereInput;
    some?: job_postingWhereInput;
    none?: job_postingWhereInput;
  };

  export type OwnerListRelationFilter = {
    every?: ownerWhereInput;
    some?: ownerWhereInput;
    none?: ownerWhereInput;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type job_postingOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ownerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    industry?: SortOrder;
    size?: SortOrder;
    founded_year?: SortOrder;
    website_url?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type companyAvgOrderByAggregateInput = {
    size?: SortOrder;
    founded_year?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    industry?: SortOrder;
    size?: SortOrder;
    founded_year?: SortOrder;
    website_url?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    industry?: SortOrder;
    size?: SortOrder;
    founded_year?: SortOrder;
    website_url?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type companySumOrderByAggregateInput = {
    size?: SortOrder;
    founded_year?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type ApplicantRelationFilter = {
    is?: applicantWhereInput;
    isNot?: applicantWhereInput;
  };

  export type Job_postingRelationFilter = {
    is?: job_postingWhereInput;
    isNot?: job_postingWhereInput;
  };

  export type interviewCountOrderByAggregateInput = {
    id?: SortOrder;
    applicant_id?: SortOrder;
    interviewer_id?: SortOrder;
    job_posting_id?: SortOrder;
    date?: SortOrder;
    feedback?: SortOrder;
    result?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type interviewMaxOrderByAggregateInput = {
    id?: SortOrder;
    applicant_id?: SortOrder;
    interviewer_id?: SortOrder;
    job_posting_id?: SortOrder;
    date?: SortOrder;
    feedback?: SortOrder;
    result?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type interviewMinOrderByAggregateInput = {
    id?: SortOrder;
    applicant_id?: SortOrder;
    interviewer_id?: SortOrder;
    job_posting_id?: SortOrder;
    date?: SortOrder;
    feedback?: SortOrder;
    result?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type job_postingCountOrderByAggregateInput = {
    id?: SortOrder;
    company_id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    requirements?: SortOrder;
    salary_range?: SortOrder;
    posted_date?: SortOrder;
    closing_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_postingMaxOrderByAggregateInput = {
    id?: SortOrder;
    company_id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    requirements?: SortOrder;
    salary_range?: SortOrder;
    posted_date?: SortOrder;
    closing_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_postingMinOrderByAggregateInput = {
    id?: SortOrder;
    company_id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    requirements?: SortOrder;
    salary_range?: SortOrder;
    posted_date?: SortOrder;
    closing_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ownerCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    position?: SortOrder;
    hired_date?: SortOrder;
    salary?: SortOrder;
    benefits?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ownerAvgOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type ownerMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    position?: SortOrder;
    hired_date?: SortOrder;
    salary?: SortOrder;
    benefits?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ownerMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    position?: SortOrder;
    hired_date?: SortOrder;
    salary?: SortOrder;
    benefits?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ownerSumOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type ApplicantListRelationFilter = {
    every?: applicantWhereInput;
    some?: applicantWhereInput;
    none?: applicantWhereInput;
  };

  export type CompanyNullableRelationFilter = {
    is?: companyWhereInput | null;
    isNot?: companyWhereInput | null;
  };

  export type applicantOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type userCreateNestedOneWithoutApplicantInput = {
    create?: XOR<userCreateWithoutApplicantInput, userUncheckedCreateWithoutApplicantInput>;
    connectOrCreate?: userCreateOrConnectWithoutApplicantInput;
    connect?: userWhereUniqueInput;
  };

  export type interviewCreateNestedManyWithoutApplicantInput = {
    create?:
      | XOR<interviewCreateWithoutApplicantInput, interviewUncheckedCreateWithoutApplicantInput>
      | interviewCreateWithoutApplicantInput[]
      | interviewUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?: interviewCreateOrConnectWithoutApplicantInput | interviewCreateOrConnectWithoutApplicantInput[];
    createMany?: interviewCreateManyApplicantInputEnvelope;
    connect?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
  };

  export type interviewUncheckedCreateNestedManyWithoutApplicantInput = {
    create?:
      | XOR<interviewCreateWithoutApplicantInput, interviewUncheckedCreateWithoutApplicantInput>
      | interviewCreateWithoutApplicantInput[]
      | interviewUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?: interviewCreateOrConnectWithoutApplicantInput | interviewCreateOrConnectWithoutApplicantInput[];
    createMany?: interviewCreateManyApplicantInputEnvelope;
    connect?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutApplicantNestedInput = {
    create?: XOR<userCreateWithoutApplicantInput, userUncheckedCreateWithoutApplicantInput>;
    connectOrCreate?: userCreateOrConnectWithoutApplicantInput;
    upsert?: userUpsertWithoutApplicantInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutApplicantInput, userUpdateWithoutApplicantInput>,
      userUncheckedUpdateWithoutApplicantInput
    >;
  };

  export type interviewUpdateManyWithoutApplicantNestedInput = {
    create?:
      | XOR<interviewCreateWithoutApplicantInput, interviewUncheckedCreateWithoutApplicantInput>
      | interviewCreateWithoutApplicantInput[]
      | interviewUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?: interviewCreateOrConnectWithoutApplicantInput | interviewCreateOrConnectWithoutApplicantInput[];
    upsert?:
      | interviewUpsertWithWhereUniqueWithoutApplicantInput
      | interviewUpsertWithWhereUniqueWithoutApplicantInput[];
    createMany?: interviewCreateManyApplicantInputEnvelope;
    set?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    disconnect?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    delete?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    connect?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    update?:
      | interviewUpdateWithWhereUniqueWithoutApplicantInput
      | interviewUpdateWithWhereUniqueWithoutApplicantInput[];
    updateMany?:
      | interviewUpdateManyWithWhereWithoutApplicantInput
      | interviewUpdateManyWithWhereWithoutApplicantInput[];
    deleteMany?: interviewScalarWhereInput | interviewScalarWhereInput[];
  };

  export type interviewUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?:
      | XOR<interviewCreateWithoutApplicantInput, interviewUncheckedCreateWithoutApplicantInput>
      | interviewCreateWithoutApplicantInput[]
      | interviewUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?: interviewCreateOrConnectWithoutApplicantInput | interviewCreateOrConnectWithoutApplicantInput[];
    upsert?:
      | interviewUpsertWithWhereUniqueWithoutApplicantInput
      | interviewUpsertWithWhereUniqueWithoutApplicantInput[];
    createMany?: interviewCreateManyApplicantInputEnvelope;
    set?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    disconnect?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    delete?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    connect?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    update?:
      | interviewUpdateWithWhereUniqueWithoutApplicantInput
      | interviewUpdateWithWhereUniqueWithoutApplicantInput[];
    updateMany?:
      | interviewUpdateManyWithWhereWithoutApplicantInput
      | interviewUpdateManyWithWhereWithoutApplicantInput[];
    deleteMany?: interviewScalarWhereInput | interviewScalarWhereInput[];
  };

  export type job_postingCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<job_postingCreateWithoutCompanyInput, job_postingUncheckedCreateWithoutCompanyInput>
      | job_postingCreateWithoutCompanyInput[]
      | job_postingUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: job_postingCreateOrConnectWithoutCompanyInput | job_postingCreateOrConnectWithoutCompanyInput[];
    createMany?: job_postingCreateManyCompanyInputEnvelope;
    connect?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
  };

  export type ownerCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<ownerCreateWithoutCompanyInput, ownerUncheckedCreateWithoutCompanyInput>
      | ownerCreateWithoutCompanyInput[]
      | ownerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutCompanyInput | ownerCreateOrConnectWithoutCompanyInput[];
    createMany?: ownerCreateManyCompanyInputEnvelope;
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
  };

  export type userCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type job_postingUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<job_postingCreateWithoutCompanyInput, job_postingUncheckedCreateWithoutCompanyInput>
      | job_postingCreateWithoutCompanyInput[]
      | job_postingUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: job_postingCreateOrConnectWithoutCompanyInput | job_postingCreateOrConnectWithoutCompanyInput[];
    createMany?: job_postingCreateManyCompanyInputEnvelope;
    connect?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
  };

  export type ownerUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<ownerCreateWithoutCompanyInput, ownerUncheckedCreateWithoutCompanyInput>
      | ownerCreateWithoutCompanyInput[]
      | ownerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutCompanyInput | ownerCreateOrConnectWithoutCompanyInput[];
    createMany?: ownerCreateManyCompanyInputEnvelope;
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type job_postingUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<job_postingCreateWithoutCompanyInput, job_postingUncheckedCreateWithoutCompanyInput>
      | job_postingCreateWithoutCompanyInput[]
      | job_postingUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: job_postingCreateOrConnectWithoutCompanyInput | job_postingCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | job_postingUpsertWithWhereUniqueWithoutCompanyInput
      | job_postingUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: job_postingCreateManyCompanyInputEnvelope;
    set?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
    disconnect?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
    delete?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
    connect?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
    update?:
      | job_postingUpdateWithWhereUniqueWithoutCompanyInput
      | job_postingUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | job_postingUpdateManyWithWhereWithoutCompanyInput
      | job_postingUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: job_postingScalarWhereInput | job_postingScalarWhereInput[];
  };

  export type ownerUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<ownerCreateWithoutCompanyInput, ownerUncheckedCreateWithoutCompanyInput>
      | ownerCreateWithoutCompanyInput[]
      | ownerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutCompanyInput | ownerCreateOrConnectWithoutCompanyInput[];
    upsert?: ownerUpsertWithWhereUniqueWithoutCompanyInput | ownerUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: ownerCreateManyCompanyInputEnvelope;
    set?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    disconnect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    delete?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    update?: ownerUpdateWithWhereUniqueWithoutCompanyInput | ownerUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: ownerUpdateManyWithWhereWithoutCompanyInput | ownerUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: ownerScalarWhereInput | ownerScalarWhereInput[];
  };

  export type userUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    upsert?: userUpsertWithWhereUniqueWithoutCompanyInput | userUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutCompanyInput | userUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: userUpdateManyWithWhereWithoutCompanyInput | userUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type job_postingUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<job_postingCreateWithoutCompanyInput, job_postingUncheckedCreateWithoutCompanyInput>
      | job_postingCreateWithoutCompanyInput[]
      | job_postingUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: job_postingCreateOrConnectWithoutCompanyInput | job_postingCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | job_postingUpsertWithWhereUniqueWithoutCompanyInput
      | job_postingUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: job_postingCreateManyCompanyInputEnvelope;
    set?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
    disconnect?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
    delete?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
    connect?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
    update?:
      | job_postingUpdateWithWhereUniqueWithoutCompanyInput
      | job_postingUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | job_postingUpdateManyWithWhereWithoutCompanyInput
      | job_postingUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: job_postingScalarWhereInput | job_postingScalarWhereInput[];
  };

  export type ownerUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<ownerCreateWithoutCompanyInput, ownerUncheckedCreateWithoutCompanyInput>
      | ownerCreateWithoutCompanyInput[]
      | ownerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutCompanyInput | ownerCreateOrConnectWithoutCompanyInput[];
    upsert?: ownerUpsertWithWhereUniqueWithoutCompanyInput | ownerUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: ownerCreateManyCompanyInputEnvelope;
    set?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    disconnect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    delete?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    update?: ownerUpdateWithWhereUniqueWithoutCompanyInput | ownerUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: ownerUpdateManyWithWhereWithoutCompanyInput | ownerUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: ownerScalarWhereInput | ownerScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    upsert?: userUpsertWithWhereUniqueWithoutCompanyInput | userUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutCompanyInput | userUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: userUpdateManyWithWhereWithoutCompanyInput | userUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type applicantCreateNestedOneWithoutInterviewInput = {
    create?: XOR<applicantCreateWithoutInterviewInput, applicantUncheckedCreateWithoutInterviewInput>;
    connectOrCreate?: applicantCreateOrConnectWithoutInterviewInput;
    connect?: applicantWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutInterviewInput = {
    create?: XOR<userCreateWithoutInterviewInput, userUncheckedCreateWithoutInterviewInput>;
    connectOrCreate?: userCreateOrConnectWithoutInterviewInput;
    connect?: userWhereUniqueInput;
  };

  export type job_postingCreateNestedOneWithoutInterviewInput = {
    create?: XOR<job_postingCreateWithoutInterviewInput, job_postingUncheckedCreateWithoutInterviewInput>;
    connectOrCreate?: job_postingCreateOrConnectWithoutInterviewInput;
    connect?: job_postingWhereUniqueInput;
  };

  export type applicantUpdateOneRequiredWithoutInterviewNestedInput = {
    create?: XOR<applicantCreateWithoutInterviewInput, applicantUncheckedCreateWithoutInterviewInput>;
    connectOrCreate?: applicantCreateOrConnectWithoutInterviewInput;
    upsert?: applicantUpsertWithoutInterviewInput;
    connect?: applicantWhereUniqueInput;
    update?: XOR<
      XOR<applicantUpdateToOneWithWhereWithoutInterviewInput, applicantUpdateWithoutInterviewInput>,
      applicantUncheckedUpdateWithoutInterviewInput
    >;
  };

  export type userUpdateOneRequiredWithoutInterviewNestedInput = {
    create?: XOR<userCreateWithoutInterviewInput, userUncheckedCreateWithoutInterviewInput>;
    connectOrCreate?: userCreateOrConnectWithoutInterviewInput;
    upsert?: userUpsertWithoutInterviewInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutInterviewInput, userUpdateWithoutInterviewInput>,
      userUncheckedUpdateWithoutInterviewInput
    >;
  };

  export type job_postingUpdateOneRequiredWithoutInterviewNestedInput = {
    create?: XOR<job_postingCreateWithoutInterviewInput, job_postingUncheckedCreateWithoutInterviewInput>;
    connectOrCreate?: job_postingCreateOrConnectWithoutInterviewInput;
    upsert?: job_postingUpsertWithoutInterviewInput;
    connect?: job_postingWhereUniqueInput;
    update?: XOR<
      XOR<job_postingUpdateToOneWithWhereWithoutInterviewInput, job_postingUpdateWithoutInterviewInput>,
      job_postingUncheckedUpdateWithoutInterviewInput
    >;
  };

  export type interviewCreateNestedManyWithoutJob_postingInput = {
    create?:
      | XOR<interviewCreateWithoutJob_postingInput, interviewUncheckedCreateWithoutJob_postingInput>
      | interviewCreateWithoutJob_postingInput[]
      | interviewUncheckedCreateWithoutJob_postingInput[];
    connectOrCreate?:
      | interviewCreateOrConnectWithoutJob_postingInput
      | interviewCreateOrConnectWithoutJob_postingInput[];
    createMany?: interviewCreateManyJob_postingInputEnvelope;
    connect?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
  };

  export type companyCreateNestedOneWithoutJob_postingInput = {
    create?: XOR<companyCreateWithoutJob_postingInput, companyUncheckedCreateWithoutJob_postingInput>;
    connectOrCreate?: companyCreateOrConnectWithoutJob_postingInput;
    connect?: companyWhereUniqueInput;
  };

  export type interviewUncheckedCreateNestedManyWithoutJob_postingInput = {
    create?:
      | XOR<interviewCreateWithoutJob_postingInput, interviewUncheckedCreateWithoutJob_postingInput>
      | interviewCreateWithoutJob_postingInput[]
      | interviewUncheckedCreateWithoutJob_postingInput[];
    connectOrCreate?:
      | interviewCreateOrConnectWithoutJob_postingInput
      | interviewCreateOrConnectWithoutJob_postingInput[];
    createMany?: interviewCreateManyJob_postingInputEnvelope;
    connect?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
  };

  export type interviewUpdateManyWithoutJob_postingNestedInput = {
    create?:
      | XOR<interviewCreateWithoutJob_postingInput, interviewUncheckedCreateWithoutJob_postingInput>
      | interviewCreateWithoutJob_postingInput[]
      | interviewUncheckedCreateWithoutJob_postingInput[];
    connectOrCreate?:
      | interviewCreateOrConnectWithoutJob_postingInput
      | interviewCreateOrConnectWithoutJob_postingInput[];
    upsert?:
      | interviewUpsertWithWhereUniqueWithoutJob_postingInput
      | interviewUpsertWithWhereUniqueWithoutJob_postingInput[];
    createMany?: interviewCreateManyJob_postingInputEnvelope;
    set?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    disconnect?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    delete?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    connect?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    update?:
      | interviewUpdateWithWhereUniqueWithoutJob_postingInput
      | interviewUpdateWithWhereUniqueWithoutJob_postingInput[];
    updateMany?:
      | interviewUpdateManyWithWhereWithoutJob_postingInput
      | interviewUpdateManyWithWhereWithoutJob_postingInput[];
    deleteMany?: interviewScalarWhereInput | interviewScalarWhereInput[];
  };

  export type companyUpdateOneRequiredWithoutJob_postingNestedInput = {
    create?: XOR<companyCreateWithoutJob_postingInput, companyUncheckedCreateWithoutJob_postingInput>;
    connectOrCreate?: companyCreateOrConnectWithoutJob_postingInput;
    upsert?: companyUpsertWithoutJob_postingInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutJob_postingInput, companyUpdateWithoutJob_postingInput>,
      companyUncheckedUpdateWithoutJob_postingInput
    >;
  };

  export type interviewUncheckedUpdateManyWithoutJob_postingNestedInput = {
    create?:
      | XOR<interviewCreateWithoutJob_postingInput, interviewUncheckedCreateWithoutJob_postingInput>
      | interviewCreateWithoutJob_postingInput[]
      | interviewUncheckedCreateWithoutJob_postingInput[];
    connectOrCreate?:
      | interviewCreateOrConnectWithoutJob_postingInput
      | interviewCreateOrConnectWithoutJob_postingInput[];
    upsert?:
      | interviewUpsertWithWhereUniqueWithoutJob_postingInput
      | interviewUpsertWithWhereUniqueWithoutJob_postingInput[];
    createMany?: interviewCreateManyJob_postingInputEnvelope;
    set?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    disconnect?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    delete?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    connect?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    update?:
      | interviewUpdateWithWhereUniqueWithoutJob_postingInput
      | interviewUpdateWithWhereUniqueWithoutJob_postingInput[];
    updateMany?:
      | interviewUpdateManyWithWhereWithoutJob_postingInput
      | interviewUpdateManyWithWhereWithoutJob_postingInput[];
    deleteMany?: interviewScalarWhereInput | interviewScalarWhereInput[];
  };

  export type companyCreateNestedOneWithoutOwnerInput = {
    create?: XOR<companyCreateWithoutOwnerInput, companyUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: companyCreateOrConnectWithoutOwnerInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutOwnerInput = {
    create?: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: userCreateOrConnectWithoutOwnerInput;
    connect?: userWhereUniqueInput;
  };

  export type companyUpdateOneRequiredWithoutOwnerNestedInput = {
    create?: XOR<companyCreateWithoutOwnerInput, companyUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: companyCreateOrConnectWithoutOwnerInput;
    upsert?: companyUpsertWithoutOwnerInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutOwnerInput, companyUpdateWithoutOwnerInput>,
      companyUncheckedUpdateWithoutOwnerInput
    >;
  };

  export type userUpdateOneRequiredWithoutOwnerNestedInput = {
    create?: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: userCreateOrConnectWithoutOwnerInput;
    upsert?: userUpsertWithoutOwnerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOwnerInput, userUpdateWithoutOwnerInput>,
      userUncheckedUpdateWithoutOwnerInput
    >;
  };

  export type applicantCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<applicantCreateWithoutUserInput, applicantUncheckedCreateWithoutUserInput>
      | applicantCreateWithoutUserInput[]
      | applicantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicantCreateOrConnectWithoutUserInput | applicantCreateOrConnectWithoutUserInput[];
    createMany?: applicantCreateManyUserInputEnvelope;
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
  };

  export type interviewCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<interviewCreateWithoutUserInput, interviewUncheckedCreateWithoutUserInput>
      | interviewCreateWithoutUserInput[]
      | interviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: interviewCreateOrConnectWithoutUserInput | interviewCreateOrConnectWithoutUserInput[];
    createMany?: interviewCreateManyUserInputEnvelope;
    connect?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
  };

  export type ownerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
  };

  export type companyCreateNestedOneWithoutUserInput = {
    create?: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
    connectOrCreate?: companyCreateOrConnectWithoutUserInput;
    connect?: companyWhereUniqueInput;
  };

  export type applicantUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<applicantCreateWithoutUserInput, applicantUncheckedCreateWithoutUserInput>
      | applicantCreateWithoutUserInput[]
      | applicantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicantCreateOrConnectWithoutUserInput | applicantCreateOrConnectWithoutUserInput[];
    createMany?: applicantCreateManyUserInputEnvelope;
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
  };

  export type interviewUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<interviewCreateWithoutUserInput, interviewUncheckedCreateWithoutUserInput>
      | interviewCreateWithoutUserInput[]
      | interviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: interviewCreateOrConnectWithoutUserInput | interviewCreateOrConnectWithoutUserInput[];
    createMany?: interviewCreateManyUserInputEnvelope;
    connect?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
  };

  export type ownerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
  };

  export type applicantUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<applicantCreateWithoutUserInput, applicantUncheckedCreateWithoutUserInput>
      | applicantCreateWithoutUserInput[]
      | applicantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicantCreateOrConnectWithoutUserInput | applicantCreateOrConnectWithoutUserInput[];
    upsert?: applicantUpsertWithWhereUniqueWithoutUserInput | applicantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: applicantCreateManyUserInputEnvelope;
    set?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    disconnect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    delete?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    update?: applicantUpdateWithWhereUniqueWithoutUserInput | applicantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: applicantUpdateManyWithWhereWithoutUserInput | applicantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: applicantScalarWhereInput | applicantScalarWhereInput[];
  };

  export type interviewUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<interviewCreateWithoutUserInput, interviewUncheckedCreateWithoutUserInput>
      | interviewCreateWithoutUserInput[]
      | interviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: interviewCreateOrConnectWithoutUserInput | interviewCreateOrConnectWithoutUserInput[];
    upsert?: interviewUpsertWithWhereUniqueWithoutUserInput | interviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: interviewCreateManyUserInputEnvelope;
    set?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    disconnect?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    delete?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    connect?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    update?: interviewUpdateWithWhereUniqueWithoutUserInput | interviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: interviewUpdateManyWithWhereWithoutUserInput | interviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: interviewScalarWhereInput | interviewScalarWhereInput[];
  };

  export type ownerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    upsert?: ownerUpsertWithWhereUniqueWithoutUserInput | ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    set?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    disconnect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    delete?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    update?: ownerUpdateWithWhereUniqueWithoutUserInput | ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: ownerUpdateManyWithWhereWithoutUserInput | ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ownerScalarWhereInput | ownerScalarWhereInput[];
  };

  export type companyUpdateOneWithoutUserNestedInput = {
    create?: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
    connectOrCreate?: companyCreateOrConnectWithoutUserInput;
    upsert?: companyUpsertWithoutUserInput;
    disconnect?: companyWhereInput | boolean;
    delete?: companyWhereInput | boolean;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutUserInput, companyUpdateWithoutUserInput>,
      companyUncheckedUpdateWithoutUserInput
    >;
  };

  export type applicantUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<applicantCreateWithoutUserInput, applicantUncheckedCreateWithoutUserInput>
      | applicantCreateWithoutUserInput[]
      | applicantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicantCreateOrConnectWithoutUserInput | applicantCreateOrConnectWithoutUserInput[];
    upsert?: applicantUpsertWithWhereUniqueWithoutUserInput | applicantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: applicantCreateManyUserInputEnvelope;
    set?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    disconnect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    delete?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    update?: applicantUpdateWithWhereUniqueWithoutUserInput | applicantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: applicantUpdateManyWithWhereWithoutUserInput | applicantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: applicantScalarWhereInput | applicantScalarWhereInput[];
  };

  export type interviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<interviewCreateWithoutUserInput, interviewUncheckedCreateWithoutUserInput>
      | interviewCreateWithoutUserInput[]
      | interviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: interviewCreateOrConnectWithoutUserInput | interviewCreateOrConnectWithoutUserInput[];
    upsert?: interviewUpsertWithWhereUniqueWithoutUserInput | interviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: interviewCreateManyUserInputEnvelope;
    set?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    disconnect?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    delete?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    connect?: interviewWhereUniqueInput | interviewWhereUniqueInput[];
    update?: interviewUpdateWithWhereUniqueWithoutUserInput | interviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: interviewUpdateManyWithWhereWithoutUserInput | interviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: interviewScalarWhereInput | interviewScalarWhereInput[];
  };

  export type ownerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    upsert?: ownerUpsertWithWhereUniqueWithoutUserInput | ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    set?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    disconnect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    delete?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    update?: ownerUpdateWithWhereUniqueWithoutUserInput | ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: ownerUpdateManyWithWhereWithoutUserInput | ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ownerScalarWhereInput | ownerScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type userCreateWithoutApplicantInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    interview?: interviewCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutApplicantInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    interview?: interviewUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutApplicantInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutApplicantInput, userUncheckedCreateWithoutApplicantInput>;
  };

  export type interviewCreateWithoutApplicantInput = {
    id?: string;
    date?: Date | string | null;
    feedback?: string | null;
    result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutInterviewInput;
    job_posting: job_postingCreateNestedOneWithoutInterviewInput;
  };

  export type interviewUncheckedCreateWithoutApplicantInput = {
    id?: string;
    interviewer_id: string;
    job_posting_id: string;
    date?: Date | string | null;
    feedback?: string | null;
    result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type interviewCreateOrConnectWithoutApplicantInput = {
    where: interviewWhereUniqueInput;
    create: XOR<interviewCreateWithoutApplicantInput, interviewUncheckedCreateWithoutApplicantInput>;
  };

  export type interviewCreateManyApplicantInputEnvelope = {
    data: interviewCreateManyApplicantInput | interviewCreateManyApplicantInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutApplicantInput = {
    update: XOR<userUpdateWithoutApplicantInput, userUncheckedUpdateWithoutApplicantInput>;
    create: XOR<userCreateWithoutApplicantInput, userUncheckedCreateWithoutApplicantInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutApplicantInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutApplicantInput, userUncheckedUpdateWithoutApplicantInput>;
  };

  export type userUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    interview?: interviewUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
    company?: companyUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    interview?: interviewUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type interviewUpsertWithWhereUniqueWithoutApplicantInput = {
    where: interviewWhereUniqueInput;
    update: XOR<interviewUpdateWithoutApplicantInput, interviewUncheckedUpdateWithoutApplicantInput>;
    create: XOR<interviewCreateWithoutApplicantInput, interviewUncheckedCreateWithoutApplicantInput>;
  };

  export type interviewUpdateWithWhereUniqueWithoutApplicantInput = {
    where: interviewWhereUniqueInput;
    data: XOR<interviewUpdateWithoutApplicantInput, interviewUncheckedUpdateWithoutApplicantInput>;
  };

  export type interviewUpdateManyWithWhereWithoutApplicantInput = {
    where: interviewScalarWhereInput;
    data: XOR<interviewUpdateManyMutationInput, interviewUncheckedUpdateManyWithoutApplicantInput>;
  };

  export type interviewScalarWhereInput = {
    AND?: interviewScalarWhereInput | interviewScalarWhereInput[];
    OR?: interviewScalarWhereInput[];
    NOT?: interviewScalarWhereInput | interviewScalarWhereInput[];
    id?: UuidFilter<'interview'> | string;
    applicant_id?: UuidFilter<'interview'> | string;
    interviewer_id?: UuidFilter<'interview'> | string;
    job_posting_id?: UuidFilter<'interview'> | string;
    date?: DateTimeNullableFilter<'interview'> | Date | string | null;
    feedback?: StringNullableFilter<'interview'> | string | null;
    result?: StringNullableFilter<'interview'> | string | null;
    created_at?: DateTimeFilter<'interview'> | Date | string;
    updated_at?: DateTimeFilter<'interview'> | Date | string;
  };

  export type job_postingCreateWithoutCompanyInput = {
    id?: string;
    title?: string | null;
    description?: string | null;
    requirements?: string | null;
    salary_range?: string | null;
    posted_date?: Date | string | null;
    closing_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    interview?: interviewCreateNestedManyWithoutJob_postingInput;
  };

  export type job_postingUncheckedCreateWithoutCompanyInput = {
    id?: string;
    title?: string | null;
    description?: string | null;
    requirements?: string | null;
    salary_range?: string | null;
    posted_date?: Date | string | null;
    closing_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    interview?: interviewUncheckedCreateNestedManyWithoutJob_postingInput;
  };

  export type job_postingCreateOrConnectWithoutCompanyInput = {
    where: job_postingWhereUniqueInput;
    create: XOR<job_postingCreateWithoutCompanyInput, job_postingUncheckedCreateWithoutCompanyInput>;
  };

  export type job_postingCreateManyCompanyInputEnvelope = {
    data: job_postingCreateManyCompanyInput | job_postingCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type ownerCreateWithoutCompanyInput = {
    id?: string;
    position?: string | null;
    hired_date?: Date | string | null;
    salary?: number | null;
    benefits?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutOwnerInput;
  };

  export type ownerUncheckedCreateWithoutCompanyInput = {
    id?: string;
    user_id: string;
    position?: string | null;
    hired_date?: Date | string | null;
    salary?: number | null;
    benefits?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerCreateOrConnectWithoutCompanyInput = {
    where: ownerWhereUniqueInput;
    create: XOR<ownerCreateWithoutCompanyInput, ownerUncheckedCreateWithoutCompanyInput>;
  };

  export type ownerCreateManyCompanyInputEnvelope = {
    data: ownerCreateManyCompanyInput | ownerCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantCreateNestedManyWithoutUserInput;
    interview?: interviewCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantUncheckedCreateNestedManyWithoutUserInput;
    interview?: interviewUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userCreateManyCompanyInputEnvelope = {
    data: userCreateManyCompanyInput | userCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type job_postingUpsertWithWhereUniqueWithoutCompanyInput = {
    where: job_postingWhereUniqueInput;
    update: XOR<job_postingUpdateWithoutCompanyInput, job_postingUncheckedUpdateWithoutCompanyInput>;
    create: XOR<job_postingCreateWithoutCompanyInput, job_postingUncheckedCreateWithoutCompanyInput>;
  };

  export type job_postingUpdateWithWhereUniqueWithoutCompanyInput = {
    where: job_postingWhereUniqueInput;
    data: XOR<job_postingUpdateWithoutCompanyInput, job_postingUncheckedUpdateWithoutCompanyInput>;
  };

  export type job_postingUpdateManyWithWhereWithoutCompanyInput = {
    where: job_postingScalarWhereInput;
    data: XOR<job_postingUpdateManyMutationInput, job_postingUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type job_postingScalarWhereInput = {
    AND?: job_postingScalarWhereInput | job_postingScalarWhereInput[];
    OR?: job_postingScalarWhereInput[];
    NOT?: job_postingScalarWhereInput | job_postingScalarWhereInput[];
    id?: UuidFilter<'job_posting'> | string;
    company_id?: UuidFilter<'job_posting'> | string;
    title?: StringNullableFilter<'job_posting'> | string | null;
    description?: StringNullableFilter<'job_posting'> | string | null;
    requirements?: StringNullableFilter<'job_posting'> | string | null;
    salary_range?: StringNullableFilter<'job_posting'> | string | null;
    posted_date?: DateTimeNullableFilter<'job_posting'> | Date | string | null;
    closing_date?: DateTimeNullableFilter<'job_posting'> | Date | string | null;
    created_at?: DateTimeFilter<'job_posting'> | Date | string;
    updated_at?: DateTimeFilter<'job_posting'> | Date | string;
  };

  export type ownerUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ownerWhereUniqueInput;
    update: XOR<ownerUpdateWithoutCompanyInput, ownerUncheckedUpdateWithoutCompanyInput>;
    create: XOR<ownerCreateWithoutCompanyInput, ownerUncheckedCreateWithoutCompanyInput>;
  };

  export type ownerUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ownerWhereUniqueInput;
    data: XOR<ownerUpdateWithoutCompanyInput, ownerUncheckedUpdateWithoutCompanyInput>;
  };

  export type ownerUpdateManyWithWhereWithoutCompanyInput = {
    where: ownerScalarWhereInput;
    data: XOR<ownerUpdateManyMutationInput, ownerUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type ownerScalarWhereInput = {
    AND?: ownerScalarWhereInput | ownerScalarWhereInput[];
    OR?: ownerScalarWhereInput[];
    NOT?: ownerScalarWhereInput | ownerScalarWhereInput[];
    id?: UuidFilter<'owner'> | string;
    user_id?: UuidFilter<'owner'> | string;
    company_id?: UuidFilter<'owner'> | string;
    position?: StringNullableFilter<'owner'> | string | null;
    hired_date?: DateTimeNullableFilter<'owner'> | Date | string | null;
    salary?: IntNullableFilter<'owner'> | number | null;
    benefits?: StringNullableFilter<'owner'> | string | null;
    created_at?: DateTimeFilter<'owner'> | Date | string;
    updated_at?: DateTimeFilter<'owner'> | Date | string;
  };

  export type userUpsertWithWhereUniqueWithoutCompanyInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userUpdateWithWhereUniqueWithoutCompanyInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateManyWithWhereWithoutCompanyInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    company_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type applicantCreateWithoutInterviewInput = {
    id?: string;
    resume?: string | null;
    application_date?: Date | string | null;
    status?: string | null;
    position_applied?: string | null;
    interview_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutApplicantInput;
  };

  export type applicantUncheckedCreateWithoutInterviewInput = {
    id?: string;
    user_id: string;
    resume?: string | null;
    application_date?: Date | string | null;
    status?: string | null;
    position_applied?: string | null;
    interview_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicantCreateOrConnectWithoutInterviewInput = {
    where: applicantWhereUniqueInput;
    create: XOR<applicantCreateWithoutInterviewInput, applicantUncheckedCreateWithoutInterviewInput>;
  };

  export type userCreateWithoutInterviewInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutInterviewInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutInterviewInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutInterviewInput, userUncheckedCreateWithoutInterviewInput>;
  };

  export type job_postingCreateWithoutInterviewInput = {
    id?: string;
    title?: string | null;
    description?: string | null;
    requirements?: string | null;
    salary_range?: string | null;
    posted_date?: Date | string | null;
    closing_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutJob_postingInput;
  };

  export type job_postingUncheckedCreateWithoutInterviewInput = {
    id?: string;
    company_id: string;
    title?: string | null;
    description?: string | null;
    requirements?: string | null;
    salary_range?: string | null;
    posted_date?: Date | string | null;
    closing_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_postingCreateOrConnectWithoutInterviewInput = {
    where: job_postingWhereUniqueInput;
    create: XOR<job_postingCreateWithoutInterviewInput, job_postingUncheckedCreateWithoutInterviewInput>;
  };

  export type applicantUpsertWithoutInterviewInput = {
    update: XOR<applicantUpdateWithoutInterviewInput, applicantUncheckedUpdateWithoutInterviewInput>;
    create: XOR<applicantCreateWithoutInterviewInput, applicantUncheckedCreateWithoutInterviewInput>;
    where?: applicantWhereInput;
  };

  export type applicantUpdateToOneWithWhereWithoutInterviewInput = {
    where?: applicantWhereInput;
    data: XOR<applicantUpdateWithoutInterviewInput, applicantUncheckedUpdateWithoutInterviewInput>;
  };

  export type applicantUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    position_applied?: NullableStringFieldUpdateOperationsInput | string | null;
    interview_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutApplicantNestedInput;
  };

  export type applicantUncheckedUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    position_applied?: NullableStringFieldUpdateOperationsInput | string | null;
    interview_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutInterviewInput = {
    update: XOR<userUpdateWithoutInterviewInput, userUncheckedUpdateWithoutInterviewInput>;
    create: XOR<userCreateWithoutInterviewInput, userUncheckedCreateWithoutInterviewInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutInterviewInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutInterviewInput, userUncheckedUpdateWithoutInterviewInput>;
  };

  export type userUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
    company?: companyUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type job_postingUpsertWithoutInterviewInput = {
    update: XOR<job_postingUpdateWithoutInterviewInput, job_postingUncheckedUpdateWithoutInterviewInput>;
    create: XOR<job_postingCreateWithoutInterviewInput, job_postingUncheckedCreateWithoutInterviewInput>;
    where?: job_postingWhereInput;
  };

  export type job_postingUpdateToOneWithWhereWithoutInterviewInput = {
    where?: job_postingWhereInput;
    data: XOR<job_postingUpdateWithoutInterviewInput, job_postingUncheckedUpdateWithoutInterviewInput>;
  };

  export type job_postingUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    requirements?: NullableStringFieldUpdateOperationsInput | string | null;
    salary_range?: NullableStringFieldUpdateOperationsInput | string | null;
    posted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closing_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutJob_postingNestedInput;
  };

  export type job_postingUncheckedUpdateWithoutInterviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    requirements?: NullableStringFieldUpdateOperationsInput | string | null;
    salary_range?: NullableStringFieldUpdateOperationsInput | string | null;
    posted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closing_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type interviewCreateWithoutJob_postingInput = {
    id?: string;
    date?: Date | string | null;
    feedback?: string | null;
    result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant: applicantCreateNestedOneWithoutInterviewInput;
    user: userCreateNestedOneWithoutInterviewInput;
  };

  export type interviewUncheckedCreateWithoutJob_postingInput = {
    id?: string;
    applicant_id: string;
    interviewer_id: string;
    date?: Date | string | null;
    feedback?: string | null;
    result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type interviewCreateOrConnectWithoutJob_postingInput = {
    where: interviewWhereUniqueInput;
    create: XOR<interviewCreateWithoutJob_postingInput, interviewUncheckedCreateWithoutJob_postingInput>;
  };

  export type interviewCreateManyJob_postingInputEnvelope = {
    data: interviewCreateManyJob_postingInput | interviewCreateManyJob_postingInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutJob_postingInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    industry?: string | null;
    size?: number | null;
    founded_year?: number | null;
    website_url?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    owner?: ownerCreateNestedManyWithoutCompanyInput;
    user?: userCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutJob_postingInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    industry?: string | null;
    size?: number | null;
    founded_year?: number | null;
    website_url?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    owner?: ownerUncheckedCreateNestedManyWithoutCompanyInput;
    user?: userUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutJob_postingInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutJob_postingInput, companyUncheckedCreateWithoutJob_postingInput>;
  };

  export type interviewUpsertWithWhereUniqueWithoutJob_postingInput = {
    where: interviewWhereUniqueInput;
    update: XOR<interviewUpdateWithoutJob_postingInput, interviewUncheckedUpdateWithoutJob_postingInput>;
    create: XOR<interviewCreateWithoutJob_postingInput, interviewUncheckedCreateWithoutJob_postingInput>;
  };

  export type interviewUpdateWithWhereUniqueWithoutJob_postingInput = {
    where: interviewWhereUniqueInput;
    data: XOR<interviewUpdateWithoutJob_postingInput, interviewUncheckedUpdateWithoutJob_postingInput>;
  };

  export type interviewUpdateManyWithWhereWithoutJob_postingInput = {
    where: interviewScalarWhereInput;
    data: XOR<interviewUpdateManyMutationInput, interviewUncheckedUpdateManyWithoutJob_postingInput>;
  };

  export type companyUpsertWithoutJob_postingInput = {
    update: XOR<companyUpdateWithoutJob_postingInput, companyUncheckedUpdateWithoutJob_postingInput>;
    create: XOR<companyCreateWithoutJob_postingInput, companyUncheckedCreateWithoutJob_postingInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutJob_postingInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutJob_postingInput, companyUncheckedUpdateWithoutJob_postingInput>;
  };

  export type companyUpdateWithoutJob_postingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    founded_year?: NullableIntFieldUpdateOperationsInput | number | null;
    website_url?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: ownerUpdateManyWithoutCompanyNestedInput;
    user?: userUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutJob_postingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    founded_year?: NullableIntFieldUpdateOperationsInput | number | null;
    website_url?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: ownerUncheckedUpdateManyWithoutCompanyNestedInput;
    user?: userUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateWithoutOwnerInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    industry?: string | null;
    size?: number | null;
    founded_year?: number | null;
    website_url?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_posting?: job_postingCreateNestedManyWithoutCompanyInput;
    user?: userCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutOwnerInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    industry?: string | null;
    size?: number | null;
    founded_year?: number | null;
    website_url?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_posting?: job_postingUncheckedCreateNestedManyWithoutCompanyInput;
    user?: userUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutOwnerInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutOwnerInput, companyUncheckedCreateWithoutOwnerInput>;
  };

  export type userCreateWithoutOwnerInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantCreateNestedManyWithoutUserInput;
    interview?: interviewCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOwnerInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantUncheckedCreateNestedManyWithoutUserInput;
    interview?: interviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOwnerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
  };

  export type companyUpsertWithoutOwnerInput = {
    update: XOR<companyUpdateWithoutOwnerInput, companyUncheckedUpdateWithoutOwnerInput>;
    create: XOR<companyCreateWithoutOwnerInput, companyUncheckedCreateWithoutOwnerInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutOwnerInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutOwnerInput, companyUncheckedUpdateWithoutOwnerInput>;
  };

  export type companyUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    founded_year?: NullableIntFieldUpdateOperationsInput | number | null;
    website_url?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_posting?: job_postingUpdateManyWithoutCompanyNestedInput;
    user?: userUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    founded_year?: NullableIntFieldUpdateOperationsInput | number | null;
    website_url?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_posting?: job_postingUncheckedUpdateManyWithoutCompanyNestedInput;
    user?: userUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type userUpsertWithoutOwnerInput = {
    update: XOR<userUpdateWithoutOwnerInput, userUncheckedUpdateWithoutOwnerInput>;
    create: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOwnerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOwnerInput, userUncheckedUpdateWithoutOwnerInput>;
  };

  export type userUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUpdateManyWithoutUserNestedInput;
    interview?: interviewUpdateManyWithoutUserNestedInput;
    company?: companyUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUncheckedUpdateManyWithoutUserNestedInput;
    interview?: interviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type applicantCreateWithoutUserInput = {
    id?: string;
    resume?: string | null;
    application_date?: Date | string | null;
    status?: string | null;
    position_applied?: string | null;
    interview_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    interview?: interviewCreateNestedManyWithoutApplicantInput;
  };

  export type applicantUncheckedCreateWithoutUserInput = {
    id?: string;
    resume?: string | null;
    application_date?: Date | string | null;
    status?: string | null;
    position_applied?: string | null;
    interview_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    interview?: interviewUncheckedCreateNestedManyWithoutApplicantInput;
  };

  export type applicantCreateOrConnectWithoutUserInput = {
    where: applicantWhereUniqueInput;
    create: XOR<applicantCreateWithoutUserInput, applicantUncheckedCreateWithoutUserInput>;
  };

  export type applicantCreateManyUserInputEnvelope = {
    data: applicantCreateManyUserInput | applicantCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type interviewCreateWithoutUserInput = {
    id?: string;
    date?: Date | string | null;
    feedback?: string | null;
    result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant: applicantCreateNestedOneWithoutInterviewInput;
    job_posting: job_postingCreateNestedOneWithoutInterviewInput;
  };

  export type interviewUncheckedCreateWithoutUserInput = {
    id?: string;
    applicant_id: string;
    job_posting_id: string;
    date?: Date | string | null;
    feedback?: string | null;
    result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type interviewCreateOrConnectWithoutUserInput = {
    where: interviewWhereUniqueInput;
    create: XOR<interviewCreateWithoutUserInput, interviewUncheckedCreateWithoutUserInput>;
  };

  export type interviewCreateManyUserInputEnvelope = {
    data: interviewCreateManyUserInput | interviewCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ownerCreateWithoutUserInput = {
    id?: string;
    position?: string | null;
    hired_date?: Date | string | null;
    salary?: number | null;
    benefits?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutOwnerInput;
  };

  export type ownerUncheckedCreateWithoutUserInput = {
    id?: string;
    company_id: string;
    position?: string | null;
    hired_date?: Date | string | null;
    salary?: number | null;
    benefits?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerCreateOrConnectWithoutUserInput = {
    where: ownerWhereUniqueInput;
    create: XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>;
  };

  export type ownerCreateManyUserInputEnvelope = {
    data: ownerCreateManyUserInput | ownerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    industry?: string | null;
    size?: number | null;
    founded_year?: number | null;
    website_url?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_posting?: job_postingCreateNestedManyWithoutCompanyInput;
    owner?: ownerCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    industry?: string | null;
    size?: number | null;
    founded_year?: number | null;
    website_url?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_posting?: job_postingUncheckedCreateNestedManyWithoutCompanyInput;
    owner?: ownerUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type applicantUpsertWithWhereUniqueWithoutUserInput = {
    where: applicantWhereUniqueInput;
    update: XOR<applicantUpdateWithoutUserInput, applicantUncheckedUpdateWithoutUserInput>;
    create: XOR<applicantCreateWithoutUserInput, applicantUncheckedCreateWithoutUserInput>;
  };

  export type applicantUpdateWithWhereUniqueWithoutUserInput = {
    where: applicantWhereUniqueInput;
    data: XOR<applicantUpdateWithoutUserInput, applicantUncheckedUpdateWithoutUserInput>;
  };

  export type applicantUpdateManyWithWhereWithoutUserInput = {
    where: applicantScalarWhereInput;
    data: XOR<applicantUpdateManyMutationInput, applicantUncheckedUpdateManyWithoutUserInput>;
  };

  export type applicantScalarWhereInput = {
    AND?: applicantScalarWhereInput | applicantScalarWhereInput[];
    OR?: applicantScalarWhereInput[];
    NOT?: applicantScalarWhereInput | applicantScalarWhereInput[];
    id?: UuidFilter<'applicant'> | string;
    user_id?: UuidFilter<'applicant'> | string;
    resume?: StringNullableFilter<'applicant'> | string | null;
    application_date?: DateTimeNullableFilter<'applicant'> | Date | string | null;
    status?: StringNullableFilter<'applicant'> | string | null;
    position_applied?: StringNullableFilter<'applicant'> | string | null;
    interview_date?: DateTimeNullableFilter<'applicant'> | Date | string | null;
    created_at?: DateTimeFilter<'applicant'> | Date | string;
    updated_at?: DateTimeFilter<'applicant'> | Date | string;
  };

  export type interviewUpsertWithWhereUniqueWithoutUserInput = {
    where: interviewWhereUniqueInput;
    update: XOR<interviewUpdateWithoutUserInput, interviewUncheckedUpdateWithoutUserInput>;
    create: XOR<interviewCreateWithoutUserInput, interviewUncheckedCreateWithoutUserInput>;
  };

  export type interviewUpdateWithWhereUniqueWithoutUserInput = {
    where: interviewWhereUniqueInput;
    data: XOR<interviewUpdateWithoutUserInput, interviewUncheckedUpdateWithoutUserInput>;
  };

  export type interviewUpdateManyWithWhereWithoutUserInput = {
    where: interviewScalarWhereInput;
    data: XOR<interviewUpdateManyMutationInput, interviewUncheckedUpdateManyWithoutUserInput>;
  };

  export type ownerUpsertWithWhereUniqueWithoutUserInput = {
    where: ownerWhereUniqueInput;
    update: XOR<ownerUpdateWithoutUserInput, ownerUncheckedUpdateWithoutUserInput>;
    create: XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>;
  };

  export type ownerUpdateWithWhereUniqueWithoutUserInput = {
    where: ownerWhereUniqueInput;
    data: XOR<ownerUpdateWithoutUserInput, ownerUncheckedUpdateWithoutUserInput>;
  };

  export type ownerUpdateManyWithWhereWithoutUserInput = {
    where: ownerScalarWhereInput;
    data: XOR<ownerUpdateManyMutationInput, ownerUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyUpsertWithoutUserInput = {
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutUserInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    founded_year?: NullableIntFieldUpdateOperationsInput | number | null;
    website_url?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_posting?: job_postingUpdateManyWithoutCompanyNestedInput;
    owner?: ownerUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    founded_year?: NullableIntFieldUpdateOperationsInput | number | null;
    website_url?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_posting?: job_postingUncheckedUpdateManyWithoutCompanyNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type interviewCreateManyApplicantInput = {
    id?: string;
    interviewer_id: string;
    job_posting_id: string;
    date?: Date | string | null;
    feedback?: string | null;
    result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type interviewUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutInterviewNestedInput;
    job_posting?: job_postingUpdateOneRequiredWithoutInterviewNestedInput;
  };

  export type interviewUncheckedUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    interviewer_id?: StringFieldUpdateOperationsInput | string;
    job_posting_id?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type interviewUncheckedUpdateManyWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    interviewer_id?: StringFieldUpdateOperationsInput | string;
    job_posting_id?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_postingCreateManyCompanyInput = {
    id?: string;
    title?: string | null;
    description?: string | null;
    requirements?: string | null;
    salary_range?: string | null;
    posted_date?: Date | string | null;
    closing_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerCreateManyCompanyInput = {
    id?: string;
    user_id: string;
    position?: string | null;
    hired_date?: Date | string | null;
    salary?: number | null;
    benefits?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateManyCompanyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_postingUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    requirements?: NullableStringFieldUpdateOperationsInput | string | null;
    salary_range?: NullableStringFieldUpdateOperationsInput | string | null;
    posted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closing_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    interview?: interviewUpdateManyWithoutJob_postingNestedInput;
  };

  export type job_postingUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    requirements?: NullableStringFieldUpdateOperationsInput | string | null;
    salary_range?: NullableStringFieldUpdateOperationsInput | string | null;
    posted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closing_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    interview?: interviewUncheckedUpdateManyWithoutJob_postingNestedInput;
  };

  export type job_postingUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    requirements?: NullableStringFieldUpdateOperationsInput | string | null;
    salary_range?: NullableStringFieldUpdateOperationsInput | string | null;
    posted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closing_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    hired_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    benefits?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutOwnerNestedInput;
  };

  export type ownerUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    hired_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    benefits?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    hired_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    benefits?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUpdateManyWithoutUserNestedInput;
    interview?: interviewUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUncheckedUpdateManyWithoutUserNestedInput;
    interview?: interviewUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type interviewCreateManyJob_postingInput = {
    id?: string;
    applicant_id: string;
    interviewer_id: string;
    date?: Date | string | null;
    feedback?: string | null;
    result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type interviewUpdateWithoutJob_postingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUpdateOneRequiredWithoutInterviewNestedInput;
    user?: userUpdateOneRequiredWithoutInterviewNestedInput;
  };

  export type interviewUncheckedUpdateWithoutJob_postingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    applicant_id?: StringFieldUpdateOperationsInput | string;
    interviewer_id?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type interviewUncheckedUpdateManyWithoutJob_postingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    applicant_id?: StringFieldUpdateOperationsInput | string;
    interviewer_id?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicantCreateManyUserInput = {
    id?: string;
    resume?: string | null;
    application_date?: Date | string | null;
    status?: string | null;
    position_applied?: string | null;
    interview_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type interviewCreateManyUserInput = {
    id?: string;
    applicant_id: string;
    job_posting_id: string;
    date?: Date | string | null;
    feedback?: string | null;
    result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerCreateManyUserInput = {
    id?: string;
    company_id: string;
    position?: string | null;
    hired_date?: Date | string | null;
    salary?: number | null;
    benefits?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    position_applied?: NullableStringFieldUpdateOperationsInput | string | null;
    interview_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    interview?: interviewUpdateManyWithoutApplicantNestedInput;
  };

  export type applicantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    position_applied?: NullableStringFieldUpdateOperationsInput | string | null;
    interview_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    interview?: interviewUncheckedUpdateManyWithoutApplicantNestedInput;
  };

  export type applicantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: NullableStringFieldUpdateOperationsInput | string | null;
    application_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    position_applied?: NullableStringFieldUpdateOperationsInput | string | null;
    interview_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type interviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUpdateOneRequiredWithoutInterviewNestedInput;
    job_posting?: job_postingUpdateOneRequiredWithoutInterviewNestedInput;
  };

  export type interviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    applicant_id?: StringFieldUpdateOperationsInput | string;
    job_posting_id?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type interviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    applicant_id?: StringFieldUpdateOperationsInput | string;
    job_posting_id?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    hired_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    benefits?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutOwnerNestedInput;
  };

  export type ownerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    hired_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    benefits?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    hired_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: NullableIntFieldUpdateOperationsInput | number | null;
    benefits?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use ApplicantCountOutputTypeDefaultArgs instead
   */
  export type ApplicantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ApplicantCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Job_postingCountOutputTypeDefaultArgs instead
   */
  export type Job_postingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Job_postingCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use applicantDefaultArgs instead
   */
  export type applicantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    applicantDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use interviewDefaultArgs instead
   */
  export type interviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    interviewDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use job_postingDefaultArgs instead
   */
  export type job_postingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    job_postingDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ownerDefaultArgs instead
   */
  export type ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ownerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}

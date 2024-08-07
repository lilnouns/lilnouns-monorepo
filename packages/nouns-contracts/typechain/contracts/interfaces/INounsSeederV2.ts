/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace INounsSeeder {
  export type SeedStruct = {
    background: PromiseOrValue<BigNumberish>;
    body: PromiseOrValue<BigNumberish>;
    accessory: PromiseOrValue<BigNumberish>;
    head: PromiseOrValue<BigNumberish>;
    glasses: PromiseOrValue<BigNumberish>;
  };

  export type SeedStructOutput = [number, number, number, number, number] & {
    background: number;
    body: number;
    accessory: number;
    head: number;
    glasses: number;
  };
}

export interface INounsSeederV2Interface extends utils.Interface {
  functions: {
    "generateSeed(uint256,address)": FunctionFragment;
    "generateSeedForBlock(uint256,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "generateSeed" | "generateSeedForBlock"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "generateSeed",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "generateSeedForBlock",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "generateSeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateSeedForBlock",
    data: BytesLike
  ): Result;

  events: {};
}

export interface INounsSeederV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: INounsSeederV2Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    generateSeed(
      nounId: PromiseOrValue<BigNumberish>,
      descriptor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[INounsSeeder.SeedStructOutput]>;

    generateSeedForBlock(
      nounId: PromiseOrValue<BigNumberish>,
      descriptor: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[INounsSeeder.SeedStructOutput]>;
  };

  generateSeed(
    nounId: PromiseOrValue<BigNumberish>,
    descriptor: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<INounsSeeder.SeedStructOutput>;

  generateSeedForBlock(
    nounId: PromiseOrValue<BigNumberish>,
    descriptor: PromiseOrValue<string>,
    blockNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<INounsSeeder.SeedStructOutput>;

  callStatic: {
    generateSeed(
      nounId: PromiseOrValue<BigNumberish>,
      descriptor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<INounsSeeder.SeedStructOutput>;

    generateSeedForBlock(
      nounId: PromiseOrValue<BigNumberish>,
      descriptor: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<INounsSeeder.SeedStructOutput>;
  };

  filters: {};

  estimateGas: {
    generateSeed(
      nounId: PromiseOrValue<BigNumberish>,
      descriptor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    generateSeedForBlock(
      nounId: PromiseOrValue<BigNumberish>,
      descriptor: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    generateSeed(
      nounId: PromiseOrValue<BigNumberish>,
      descriptor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    generateSeedForBlock(
      nounId: PromiseOrValue<BigNumberish>,
      descriptor: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

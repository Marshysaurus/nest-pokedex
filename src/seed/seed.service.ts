import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    await this.pokemonModel.deleteMany({}); // delete * from pokemons;

    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );

    // const insertPromisesArray = [];
    const pokemonToInsert: { name: string; no: number }[] = [];

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      // insertPromisesArray.push(this.pokemonModel.create({ name, no }));
      pokemonToInsert.push({ name, no });
    });

    // await Promise.all(insertPromisesArray);
    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed executed!';
  }
}

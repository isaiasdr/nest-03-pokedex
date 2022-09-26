import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { PokeResponse } from './interfaces/poke-response.interface'
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  constructor ( 
    @InjectModel( Pokemon.name )
    private readonly pokemonModel: Model<Pokemon>,
    private http: AxiosAdapter,
   ) {  }

  async executeSeed() {

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');

    const mapedPokemons = data.results.map( ({ name, url }) => {
      const segments = url.split('/');
      const pokemonNumberId: number = +segments[ segments.length - 2 ];

      return { name, no: pokemonNumberId  };
    });

    await this.pokemonModel.deleteMany();
    await this.pokemonModel.insertMany( mapedPokemons );

    return 'Seed Executed';
  }
}

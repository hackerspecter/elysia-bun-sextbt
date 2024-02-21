import { Database } from "bun:sqlite";
import {tabelas} from '../dashboard/schema';
const { setores, prateleiras } = tabelas;

// banco de dados
const db = new Database("./dashboard/dashboard.sqlite");


interface Setor {
  id: number;
  setor: string;
}

const query = db.query(`select * from setores  `)
const setorie: Setor[] = query.all() as Setor[];

console.log(`${setorie[1].setor}`);
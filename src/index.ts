import {Libros} from './models/libros';
import {libreria} from './models/libreria';
import { pedido } from './models/libros_pedidos';

const librerias= new libreria();
const libro_1 = new Libros ("El amor en los tiempos del cólera"," Gabriel García Márquez","  Novela romántica, realismo mágico"," Español",25,"tapa dura", 9780307387264,"  La historia de un amor perdurable que atraviesa décadas y adversidades en una ciudad costeña.","Usado (en buen estado)"," Librería La Esquina Literaria, Medellín"," 1985","Penguin Random House",368,"15 x 23 cm","450 gramos",true);

const libro_2 = new Libros ("Los ejércitos","Evelio Rosero","Novela contemporánea","español",26,"tapadura",9789587045018," La historia de un pueblo colombiano en medio del conflicto armado, vista a través de los ojos de un anciano solitario","nuevo","Librería Nacional, Medellín","2006","Alfaguara",256," 15 x 23 cm","400g",true);

const libro_3 = new Libros ("1984"," George Orwell","fitcion","ingles",89,"tapadura", 9780451524935,"Una novela distópica que explora temas de totalitarismo, vigilancia gubernamental y manipulación de la verdad","nuevo","Tienda en línea","8 de junio de 1949","Secker & Warburg",398,"11.43*3.18*18.42","100g",true);

const pedido_1 = new pedido ("07-08-2024",3105399262,"casa azul","principito")

librerias.addlibro(libro_1)
librerias.addlibro(libro_2)
librerias.addlibro(libro_3)
librerias.flitrarLibro("1984")
librerias.removelibro("Los ejércitos ")
librerias.ordenarLibros()
librerias.addPedidos(pedido_1)
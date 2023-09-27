import { bounds, LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Popup, FeatureGroup, Rectangle, Marker } from "react-leaflet";
//import "leaflet-area-select";
import AreaSelector from "./AreaSelector";
import { MinecraftGrid } from "../grids/MinecraftGrid";
import { MinecraftGrids } from '../data/minecraftgrids'
//import { MINECRAFT_GRID_DATA } from "../grids/MinecraftGridData"
import  grids  from '../data/minecraft_data.json';
//import * as data from './example.json';



export default function BaseMap(){
  const position: LatLngExpression = [56.1572, 10.2107];
  const zoom: number = 8;
  

  const dataFoo = [] as Array<MinecraftGrid>
  
  


 grids.forEach((dat) => {
    // console.log('dat', dat.tl)
     const currGrid = new MinecraftGrid({
       bounding: [
         dat.tl,
         dat.br
       ],
       loarLink: dat.loar
     })
    // console.log("MINECRAFT_GRID_DATA", currGrid)
   dataFoo.push(currGrid)
    })
    
    const RectangleList = () => {
      return (
        <span>
       
        
        
        </span>
      );
    };
  //const rectangle = new Array<gridObj>()
  //const purpleOptions = { color: 'purple' }
  //console.log("new grid data", MINECRAFT_GRID_DATA)
  //console.log("working bounding", rectangle)
  //const grids = MINECRAFT_GRID_DATA
 
   // console.log("rectangle xxxxxxxxxx", rectangle)
   console.log(dataFoo)
  return  (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={true}>
        <TileLayer 
           attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
       
        <FeatureGroup>
          
        <Popup ><a href={"loarLink"}>Download Minecraft map piece</a></Popup>
       
        {dataFoo.length > 0 && dataFoo.map((coord, i) => {

            return (   
            
            <Rectangle key={i}  bounds={coord.bounding}/>
            
            );

            })}
            

{dataFoo.length > 0 &&
        dataFoo.map((coord, index) => {
          return (
            <Marker key={index} position={[coord.bounding[0][0], coord.bounding[1][1]]} />
          );
        })}

    
        </FeatureGroup>
      
       

        <AreaSelector />
    </MapContainer>
  
  )
} 
import { SearchPanel } from "./search-panel/search-panel";
import { SearchResult } from "./search-result/search-result";
import { IHotel } from "./hotel.model";
import { QANTAS_HOTELS  } from '../qantas-hotels';
import { useState } from "react";
import * as _ from 'lodash';

export const HotelSearchContainer = () => {
    const [sortBy, setSortBy] = useState("price-high-low")
   
    var getHotelDetails = (sotby: string): IHotel[]  =>{
        const hotels: IHotel[] = QANTAS_HOTELS.results;
        if(sotby === 'price-high-low') {
             return _.sortBy(hotels, [function (o) { return o.offer.displayPrice?.amount; }]).reverse();
         }
        else{
             return _.sortBy(hotels, [function (o) { return o.offer.displayPrice?.amount; }]);
        }
    }
    
    const hotels: IHotel[] = getHotelDetails(sortBy) ;

    var onSortChanged = (Sortby: string) =>{
        setSortBy(Sortby)
    }

    return (
        <div data-testid="hotel-search-container">
            <div className="flex flex-row">
               <div className="flex-1 text-left">
                    <h5 className="flex-1 text-left italic" data-testid="hotel-search-result">{hotels.length} hotels in <span className="font-bold">Sydney</span> </h5>
               </div>
               <div><SearchPanel onSort={onSortChanged}/></div>
            </div>
            <SearchResult hotels = {hotels}/>
        </div>
    );
}
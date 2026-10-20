import {City} from './city-name.type';
import {HousingType} from './housing-type.type';
import {AmenitiesType} from './amenities-type.type';
import {User} from './user.type';

export type MockServerDataType = {
  titles: string[];
  descriptions: string[];
  postDates: string[];
  cities: City[];
  previewImages: string[];
  images: string[];
  housingTypes: HousingType[];
  amenities: AmenitiesType[];
  users: User[]
}

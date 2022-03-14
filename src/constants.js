const BOOLEAN = 'boolean'
const INPUT = 'input'
const NUMBER = 'number'
const HOME_TYPE = 'home_type'
const CITY = 'city'

export const TYPES = {
  BOOLEAN, INPUT, NUMBER, HOME_TYPE, CITY, 
}

export const homeAttributes = [
  { field: 'city_val', formValue: "City", type: CITY },
  { field: 'area', formValue: 'Area', type: INPUT },
  { field: 'latitude', formValue: "Latitude", type: INPUT },
  { field: 'longitude', formValue: "Longitude", type: INPUT },
  { field: 'zipcode', formValue: "Zipcode", type: NUMBER },
  { field: 'bathrooms', formValue: 'Number of Bathrooms', type: NUMBER },
  { field: 'bedrooms', formValue: 'Number of Bedrooms', type: NUMBER},
  { field: 'livingArea', formValue: 'Living Area', type: INPUT },
  { field: 'homeType', formValue: 'Home Type', type: HOME_TYPE },
  { field: 'isPreforeclosureAuction', formValue: 'Is Pre-foreclosure Auction', type: BOOLEAN },
  { field: 'isNonOwnerOccupied', formValue: 'Is Non-owner Occupied', type: BOOLEAN },
  { field: 'isPremierBuilder', formValue: 'Premier Builder', type: BOOLEAN },
  { field: 'taxAssessedValue', formValue: 'Tax Assessed Value', type: INPUT },
  { field: 'lotAreaValue', formValue: 'Lot Area Value', type: INPUT },
  { field: 'isHomeRec', formValue: 'Is Home Rec?', type: BOOLEAN },
  { field: 'hasAdditionalAttributions', formValue: 'Has Additional Attributions', type: BOOLEAN },
  { field: 'expansionDistance', formValue: 'Expansion Distance', type: INPUT },
  { field: 'needsUpdate', formValue: 'Needs Update', type: BOOLEAN },
  { field: 'hasHousingConnectorPermission', formValue: 'Has Housing Connector Permission', type: BOOLEAN },
]

export const cityOptions = [
  { formValue: 'Los Angeles', value: 0 }, 
  { formValue: 'Houston', value: 1 }, 
  { formValue: 'Chicago', value: 2 }, 
  { formValue: 'Philadelphia', value: 3 }, 
  { formValue: 'Phoenix', value: 4 }, 
  { formValue: 'San Diego', value: 5 }, 
  { formValue: 'Miami', value: -1 }, 
  { formValue: 'New York', value: -2 }, 
  { formValue: 'Austin', value: -3 }, 
]

export const home_types = [
 { formValue: 'Single Family', value: 0 },
 { formValue: 'Multi Family', value: 1 },
 { formValue: 'Townhouse', value: 2 },
 { formValue: 'Apartment', value: 3 },
 { formValue: 'Condo', value: 4 },
 { formValue: 'Manufactured', value: 5 },
 { formValue: 'Lot', value: 6 }
]
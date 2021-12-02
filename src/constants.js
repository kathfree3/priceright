const float64 = 'number'
const int64 = 'boolean'

const BOOLEAN = 'boolean'
const INPUT = 'input'
const NUMBER = 'number'

export const TYPES = {
  BOOLEAN,
  INPUT,
  NUMBER,
}

const otherCityFields = [
  { field: 'area', formValue: 'Area', type: INPUT},
  { field: 'bathrooms', formValue: 'bathrooms', type: NUMBER },
  { field: 'bedrooms', formValue: 'bedrooms', type: NUMBER},
  { field: 'livingArea', formValue: 'livingArea', type: INPUT},
  { field: 'homeType', formValue: 'homeType', type: NUMBER },
  { field: 'isPreforeclosureAuction', formValue: 'isPreforeclosureAuction', type: BOOLEAN },
  { field: 'isNonOwnerOccupied', formValue: 'isNonOwnerOccupied', type: BOOLEAN },
  { field: 'isPremierBuilder', formValue: 'isPremierBuilder', type: BOOLEAN },
  { field: 'taxAssessedValue', formValue: 'taxAssessedValue', type: INPUT },
  { field: 'lotAreaValue', formValue: 'lotAreaValue', type: INPUT },
  { field: 'isHomeRec', formValue: 'isHomeRec', type: BOOLEAN },
  { field: 'hasAdditionalAttributions', formValue: 'hasAdditionalAttributions', type: BOOLEAN },
  { field: 'expansionDistance', formValue: 'expansionDistance', type: INPUT },
  { field: 'needsUpdate', formValue: 'needsUpdate', type: BOOLEAN },
  { field: 'hasHousingConnectorPermission', formValue: 'hasHousingConnectorPermission', type: BOOLEAN },
  { field: 'north', formValue: 'north', type: INPUT },
  { field: 'east', formValue: 'east', type: INPUT },
  { field: 'south', formValue: 'south', type: INPUT },
  { field: 'west', formValue: 'west', type: INPUT },
]


const miamiFields = [
  {field: 'PARCELNO', formValue: 'PARCELNO', type: ''},
  {field: 'LND_SQFOOT', formValue: 'LND_SQFOOT', type: ''},
  {field: 'SPEC_FEAT_VAL', formValue: 'SPEC_FEAT_VAL', type: ''},
  {field: 'RAIL_DIST', formValue: 'RAIL_DIST', type: ''},
  {field: 'OCEAN_DIST', formValue: 'OCEAN_DIST', type: ''},
  {field: 'WATER_DIST', formValue: 'WATER_DIST', type: ''},
  {field: 'CNTR_DIST', formValue: 'CNTR_DIST', type: ''},
  {field: 'SUBCNTR_DI', formValue: 'SUBCNTR_DI', type: ''},
  {field: 'HWY_DIST', formValue: 'HWY_DIST', type: ''},
  {field: 'age', formValue: 'age', type: ''},
  {field: 'structure_quality', formValue: 'structure_quality', type: ''},
]

 const nycFields = [
  {field: 'NEIGHBORHOOD', formValue: 'NEIGHBORHOOD', type: ''},
  {field: 'BUILDING CLASS CATEGORY', formValue: 'BUILDING CLASS CATEGORY', type: ''},
  {field: 'TAX CLASS AT PRESENT', formValue: 'TAX CLASS AT PRESENT', type: ''},
  {field: 'BLOCK', formValue: 'BLOCK', type: ''},
  {field: 'LOT', formValue: 'LOT', type: ''},
  {field: 'TOTAL UNITS', formValue: 'TOTAL UNITS', type: ''},
  {field: 'LAND SQUARE FEET', formValue: 'LAND SQUARE FEET', type: ''},
  {field: 'GROSS SQUARE FEET', formValue: 'GROSS SQUARE FEET', type: ''},
  {field: 'YEAR BUILT', formValue: 'YEAR BUILT', type: ''},
  {field: 'TAX CLASS AT TIME OF SALE', formValue: 'TAX CLASS AT TIME OF SALE', type: ''},
  {field: 'SALE PRICE', formValue: 'SALE PRICE', type: ''},
  {field: 'loc', formValue: 'loc', type: ''},
]

const austinFields = [
  {field: 'city', formValue: 'city', type: ''},
  {field: 'propertyTaxRate', formValue: 'propertyTaxRate', type: ''},
  {field: 'garageSpaces', formValue: 'garageSpaces', type: ''},
  {field: 'hasAssociation', formValue: 'hasAssociation', type: ''},
  {field: 'hasCooling', formValue: 'hasCooling', type: ''},
  {field: 'hasGarage', formValue: 'hasGarage', type: ''},
  {field: 'hasHeating', formValue: 'hasHeating', type: ''},
  {field: 'hasSpa', formValue: 'hasSpa', type: ''},
  {field: 'hasView', formValue: 'hasView', type: ''},
  {field: 'homeType', formValue: 'homeType', type: ''},
  {field: 'parkingSpaces', formValue: 'parkingSpaces', type: ''},
  {field: 'yearBuilt', formValue: 'yearBuilt', type: ''},
  {field: 'numPriceChanges', formValue: 'numPriceChanges', type: ''},
  {field: 'numOfAccessibilityFeatures', formValue: 'numOfAccessibilityFeatures', type: ''},
  {field: 'numOfAppliances', formValue: 'numOfAppliances', type: ''},
  {field: 'numOfParkingFeatures', formValue: 'numOfParkingFeatures', type: ''},
  {field: 'numOfPatioAndPorchFeatures', formValue: 'numOfPatioAndPorchFeatures', type: ''},
  {field: 'numOfSecurityFeatures', formValue: 'numOfSecurityFeatures', type: ''},
  {field: 'numOfWaterfrontFeatures', formValue: 'numOfWaterfrontFeatures', type: ''},
  {field: 'numOfWindowFeatures', formValue: 'numOfWindowFeatures', type: ''},
  {field: 'numOfCommunityFeatures', formValue: 'numOfCommunityFeatures', type: ''},
  {field: 'lotSizeSqFt', formValue: 'lotSizeSqFt', type: ''},
  {field: 'livingAreaSqFt', formValue: 'livingAreaSqFt', type: ''},
  {field: 'numOfPrimarySchools', formValue: 'numOfPrimarySchools', type: ''},
  {field: 'numOfElementarySchools', formValue: 'numOfElementarySchools', type: ''},
  {field: 'numOfMiddleSchools', formValue: 'numOfMiddleSchools', type: ''},
  {field: 'numOfHighSchools', formValue: 'numOfHighSchools', type: ''},
  {field: 'avgSchoolDistance', formValue: 'avgSchoolDistance', type: ''},
  {field: 'avgSchoolSize', formValue: 'avgSchoolSize', type: ''},
  {field: 'MedianStudentsPerTeacher', formValue: 'MedianStudentsPerTeacher', type: ''},
  {field: 'numOfBathrooms', formValue: 'numOfBathrooms', type: ''},
  {field: 'numOfBedrooms', formValue: 'numOfBedrooms', type: ''},
  {field: 'numOfStories', formValue: 'numOfStories', type: ''},
  {field: 'homeImage', formValue: 'homeImage', type: ''},
]


export const cityOptions = [
  {city: 'los angeles', formValue: 'Los Angeles', attributes: otherCityFields}, 
  {city: 'houston', formValue: 'Houston', attributes: otherCityFields}, 
  {city: 'chicago', formValue: 'Chicago', attributes: otherCityFields}, 
  {city: 'philadelphia', formValue: 'Philadelphia', attributes: otherCityFields}, 
  {city: 'miami', formValue: 'Miami', attributes: miamiFields}, 
  {city: 'san diego', formValue: 'San Diego', attributes: otherCityFields}, 
  {city: 'phoenix', formValue: 'Phoenix', attributes: otherCityFields}, 
  {city: 'nyc', formValue: 'New York', attributes: nycFields}, 
  {city: 'austin', formValue: 'Austin', attributes: austinFields}, 
]

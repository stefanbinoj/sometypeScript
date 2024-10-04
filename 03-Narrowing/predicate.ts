//A predicate takes the form parameterName is Type : 
function iisFish(pet: number | boolean): pet is boolean {
    return (pet as boolean) !== undefined;
  }
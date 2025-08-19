//check if the patient id is in local storage
export const isSigned = () => {
    var patientId = localStorage.getItem('patientId');
    // Check if patientId is not null, undefined, or an empty string
    return patientId !== null && patientId !== undefined && patientId !== '';
}
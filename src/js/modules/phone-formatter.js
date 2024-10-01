function phoneFormatter(){
        const phoneElements = document.querySelectorAll('[data-phone-number]');
        phoneElements.forEach(function(element) {
            const rawPhoneNumber = element.getAttribute('data-phone-number');
            if (rawPhoneNumber && rawPhoneNumber.length === 11 && rawPhoneNumber.startsWith('8') && /^\d+$/.test(rawPhoneNumber)) {
                const formattedPhoneNumber = `8(${rawPhoneNumber.slice(1, 5)}) ${rawPhoneNumber.slice(5, 7)}-${rawPhoneNumber.slice(7, 9)}-${rawPhoneNumber.slice(9)}`;
                element.textContent = formattedPhoneNumber;
            }
        });
}

export default phoneFormatter;
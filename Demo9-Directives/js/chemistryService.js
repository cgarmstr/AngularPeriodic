chemistryApp.service('chemistryService', function () {

    var getCssClassElement = function ( elementType) {
        var cssClass = 'foo';
        elementType = elementType.toLowerCase();
        cssClass = elementType;
        switch (elementType) {
            case 'metalloids':
                cssClass = 'metalloids';
                break;
            case 'alkali metal':
                cssClass = 'alkaliMetal';
                break;
            case 'non metal':
                cssClass = 'nonMetal';
                break;
            case 'noble gas':
                cssClass = 'nobleGas';
                break;
            case 'halogen':
                cssClass = 'halogen';
                break;
            case 'alkaline earth':
                cssClass = 'alkalineEarth';
                break;
            case 'poor metal':
                cssClass = 'poorMetal';
                break;
            case 'rare earth metal':
                cssClass = 'lathanoids';
                break;
            case 'transition metal':
                cssClass = 'actinoids';
                break;
            case 'alkaline earth metal':
                cssClass = 'poorMetal';
                break;
        }
        return cssClass;
    };

    var getElements = function() {

        var periodicData = {
            elements: [
                {"atomicNumber": 1,"name": "Hydrogen","atomicWeight": 1.00794,"phase": "Gas","ionization": 13.5984,"melting": -259.14,"boiling": -252.87,"electronegativity": 2.2,"type": 'Non Metal',"group": 1,"group2": 'IA',"period": 1,"elecconfig": '1s1',"symbol": 'H'},
                {"atomicNumber": 2,"name": "Helium","atomicWeight": 4.002602,"phase": "Gas","ionization": 24.5874,"melting": NaN,"boiling": -268.93,"electronegativity": NaN,"type": 'Noble Gas',"group": 18,"group2": 'VIIIA',"period": 1,"elecconfig": '1s2',"symbol": 'He'},
                {"atomicNumber": 3,"name": "Lithium","atomicWeight": 6.941,"phase": "Solid","ionization": 5.3917,"melting": 180.54,"boiling": 1342,"electronegativity": 0.98,"type": 'Alkali Metal',"group": 1,"group2": 'IA',"period": 2,"elecconfig": '[He] 2s1',"symbol": 'Li'},
                {"atomicNumber": 4,"name": "Beryllium","atomicWeight": 9.012182,"phase": "Solid","ionization": 9.3227,"melting": 1287,"boiling": 2470,"electronegativity": 1.57,"type": 'Alkaline Earth Metal',"group": 2,"group2": 'IIA',"period": 2,"elecconfig": '[He] 2s2',"symbol": 'Be'},
                {"atomicNumber": 5,"name": "Boron","atomicWeight": 10.811,"phase": "Solid","ionization": 8.298,"melting": 2075,"boiling": 4000,"electronegativity": 2.04,"type": 'Metalloids',"group": 13,"group2": 'IIIA',"period": 2,"elecconfig": '[He] 2s2 2p1',"symbol": 'B'},
                {"atomicNumber": 6,"name": "Carbon","atomicWeight": 12.0107,"phase": "Solid","ionization": 11.2603,"melting": 3550,"boiling": 4027,"electronegativity": 2.55,"type": 'Non Metal',"group": 14,"group2": 'IVA',"period": 2,"elecconfig": '[He] 2s2 2p2',"symbol": 'C'},
                {"atomicNumber": 7,"name": "Nitrogen","atomicWeight": 14.0067,"phase": "Gas","ionization": 14.5341,"melting": -210.1,"boiling": -195.79,"electronegativity": 3.04,"type": 'Non Metal',"group": 15,"group2": 'VA',"period": 2,"elecconfig": '[He] 2s2 2p3',"symbol": 'N'},
                {"atomicNumber": 8,"name": "Oxygen","atomicWeight": 15.9994,"phase": "Gas","ionization": 13.6181,"melting": -218.3,"boiling": -182.9,"electronegativity": 3.44,"type": 'Non Metal',"group": 16,"group2": 'VIA',"period": 2,"elecconfig": '[He] 2s2 2p4',"symbol": 'O'},
                {"atomicNumber": 9,"name": "Fluorine","atomicWeight": 18.9984032,"phase": "Gas","ionization": 17.4228,"melting": -219.6,"boiling": -188.12,"electronegativity": 3.98,"type": 'Halogen',"group": 17,"group2": 'VIIA',"period": 2,"elecconfig": '[He] 2s2 2p5',"symbol": 'F'},
                {"atomicNumber": 10,"name": "Neon","atomicWeight": 20.1797,"phase": "Gas","ionization": 21.5645,"melting": -248.59,"boiling": -246.08,"electronegativity": NaN,"type": 'Noble Gas',"group": 18,"group2": 'VIIIA',"period": 2,"elecconfig": '[He] 2s2 2p6',"symbol": 'Ne'},
                {"atomicNumber": 11,"name": "Sodium","atomicWeight": 22.98977,"phase": "Solid","ionization": 5.1391,"melting": 97.72,"boiling": 883,"electronegativity": 0.93,"type": 'Alkali Metal',"group": 1,"group2": 'IA',"period": 3,"elecconfig": '[Ne] 3s1',"symbol": 'Na'},
                {"atomicNumber": 12,"name": "Magnesium","atomicWeight": 24.305,"phase": "Solid","ionization": 7.6462,"melting": 650,"boiling": 1090,"electronegativity": 1.31,"type": 'Alkaline Earth Metal',"group": 2,"group2": 'IIA',"period": 3,"elecconfig": '[Ne] 3s2',"symbol": 'Mg'},
                {"atomicNumber": 13,"name": "Aluminum","atomicWeight": 26.981538,"phase": "Solid","ionization": 5.9858,"melting": 660.32,"boiling": 2519,"electronegativity": 1.61,"type": 'Poor Metal',"group": 13,"group2": 'IIIA',"period": 3,"elecconfig": '[Ne] 3s2 3p1',"symbol": 'Al'},
                {"atomicNumber": 14,"name": "Silicon","atomicWeight": 28.0855,"phase": "Solid","ionization": 8.1517,"melting": 1414,"boiling": 2900,"electronegativity": 1.9,"type": 'Metalloids',"group": 14,"group2": 'IVA',"period": 3,"elecconfig": '[Ne] 3s2 3p2',"symbol": 'Si'},
                {"atomicNumber": 15,"name": "Phosphorus","atomicWeight": 30.97361,"phase": "Solid","ionization": 10.4867,"melting": 44.2,"boiling": 280.5,"electronegativity": 2.19,"type": 'Non Metal',"group": 15,"group2": 'VA',"period": 3,"elecconfig": '[Ne] 3s2 3p3',"symbol": 'P'},
                {"atomicNumber": 16,"name": "Sulfur","atomicWeight": 32.065,"phase": "Solid","ionization": 10.36,"melting": 115.21,"boiling": 444.72,"electronegativity": 2.58,"type": 'Non Metal',"group": 16,"group2": 'VIA',"period": 3,"elecconfig": '[Ne] 3s2 3p4',"symbol": 'S'},
                {"atomicNumber": 17,"name": "Chlorine","atomicWeight": 35.453,"phase": "Gas","ionization": 12.9676,"melting": -101.5,"boiling": -34.04,"electronegativity": 3.16,"type": 'Halogen',"group": 17,"group2": 'VIIA',"period": 3,"elecconfig": '[Ne] 3s2 3p5',"symbol": 'Cl'},
                {"atomicNumber": 18,"name": "Argon","atomicWeight": 39.948,"phase": "Gas","ionization": 15.7596,"melting": -189.3,"boiling": -185.8,"electronegativity": NaN,"type": 'Noble Gas',"group": 18,"group2": 'VIIIA',"period": 3,"elecconfig": '[Ne] 3s2 3p6',"symbol": 'Ar'},
                {"atomicNumber": 19,"name": "Potassium","atomicWeight": 39.0983,"phase": "Solid","ionization": 4.3407,"melting": 63.38,"boiling": 759,"electronegativity": 0.82,"type": 'Alkali Metal',"group": 1,"group2": 'IA',"period": 4,"elecconfig": '[Ar] 4s1',"symbol": 'K'},
                {"atomicNumber": 20,"name": "Calcium","atomicWeight": 40.078,"phase": "Solid","ionization": 6.1132,"melting": 842,"boiling": 1484,"electronegativity": 1,"type": 'Alkaline Earth Metal',"group": 2,"group2": 'IIA',"period": 4,"elecconfig": '[Ar] 4s2',"symbol": 'Ca'},
                {"atomicNumber": 21,"name": "Scandium","atomicWeight": 44.95591,"phase": "Solid","ionization": 6.5615,"melting": 1541,"boiling": 2830,"electronegativity": 1.36,"type": 'Transition Metal',"group": 3,"group2": 'IIIB',"period": 4,"elecconfig": '[Ar] 3d1 4s2',"symbol": 'Sc'},
                {"atomicNumber": 22,"name": "Titanium","atomicWeight": 47.867,"phase": "Solid","ionization": 6.8281,"melting": 1668,"boiling": 3287,"electronegativity": 1.54,"type": 'Transition Metal',"group": 4,"group2": 'IVB',"period": 4,"elecconfig": '[Ar] 3d2 4s2',"symbol": 'Ti'},
                {"atomicNumber": 23,"name": "Vanadium","atomicWeight": 50.9415,"phase": "Solid","ionization": 6.7462,"melting": 1910,"boiling": 3407,"electronegativity": 1.63,"type": 'Transition Metal',"group": 5,"group2": 'VB',"period": 4,"elecconfig": '[Ar] 3d3 4s2',"symbol": 'V'},
                {"atomicNumber": 24,"name": "Chromium","atomicWeight": 51.9961,"phase": "Solid","ionization": 6.7665,"melting": 1907,"boiling": 2671,"electronegativity": 1.66,"type": 'Transition Metal',"group": 6,"group2": 'VIB',"period": 4,"elecconfig": '[Ar] 3d5 4s1',"symbol": 'Cr'},
                {"atomicNumber": 25,"name": "Manganese","atomicWeight": 54.938049,"phase": "Solid","ionization": 7.434,"melting": 1246,"boiling": 2061,"electronegativity": 1.55,"type": 'Transition Metal',"group": 7,"group2": 'VIIB',"period": 4,"elecconfig": '[Ar] 3d5 4s2',"symbol": 'Mn'},
                {"atomicNumber": 26,"name": "Iron","atomicWeight": 55.845,"phase": "Solid","ionization": 7.9024,"melting": 1538,"boiling": 2861,"electronegativity": 1.83,"type": 'Transition Metal',"group": 8,"group2": 'VIIIB',"period": 4,"elecconfig": '[Ar] 3d6 4s2',"symbol": 'Fe'},
                {"atomicNumber": 27,"name": "Cobalt","atomicWeight": 58.9332,"phase": "Solid","ionization": 7.881,"melting": 1495,"boiling": 2927,"electronegativity": 1.88,"type": 'Transition Metal',"group": 9,"group2": 'VIIIB',"period": 4,"elecconfig": '[Ar] 3d7 4s2',"symbol": 'Co'},
                {"atomicNumber": 28,"name": "Nickel","atomicWeight": 58.6934,"phase": "Solid","ionization": 7.6398,"melting": 1455,"boiling": 2913,"electronegativity": 1.91,"type": 'Transition Metal',"group": 10,"group2": 'VIIIB',"period": 4,"elecconfig": '[Ar] 3d8 4s2',"symbol": 'Ni'},
                {"atomicNumber": 29,"name": "Copper","atomicWeight": 63.546,"phase": "Solid","ionization": 7.7264,"melting": 1084.62,"boiling": 2927,"electronegativity": 1.9,"type": 'Transition Metal',"group": 11,"group2": 'IB',"period": 4,"elecconfig": '[Ar] 3d10 4s1',"symbol": 'Cu'},
                {"atomicNumber": 30,"name": "Zinc","atomicWeight": 65.409,"phase": "Solid","ionization": 9.3942,"melting": 419.53,"boiling": 907,"electronegativity": 1.65,"type": 'Transition Metal',"group": 12,"group2": 'IIB',"period": 4,"elecconfig": '[Ar] 3d10 4s2',"symbol": 'Zn'},
                {"atomicNumber": 31,"name": "Gallium","atomicWeight": 69.723,"phase": "Solid","ionization": 5.9993,"melting": 29.76,"boiling": 2204,"electronegativity": 1.81,"type": 'Poor Metal',"group": 13,"group2": 'IIIA',"period": 4,"elecconfig": '[Ar] 3d10 4s2 4p1',"symbol": 'Ga'},
                {"atomicNumber": 32,"name": "Germanium","atomicWeight": 72.64,"phase": "Solid","ionization": 7.8994,"melting": 938.3,"boiling": 2820,"electronegativity": 2.01,"type": 'Metalloids',"group": 14,"group2": 'IVA',"period": 4,"elecconfig": '[Ar] 3d10 4s2 4p2',"symbol": 'Ge'},
                {"atomicNumber": 33,"name": "Arsenic","atomicWeight": 74.9216,"phase": "Solid","ionization": 9.7886,"melting": 817,"boiling": 614,"electronegativity": 2.18,"type": 'Metalloids',"group": 15,"group2": 'VA',"period": 4,"elecconfig": '[Ar] 3d10 4s2 4p3',"symbol": 'As'},
                {"atomicNumber": 34,"name": "Selenium","atomicWeight": 78.96,"phase": "Solid","ionization": 9.7524,"melting": 221,"boiling": 685,"electronegativity": 2.55,"type": 'Non Metal',"group": 16,"group2": 'VIA',"period": 4,"elecconfig": '[Ar] 3d10 4s2 4p4',"symbol": 'Se'},
                {"atomicNumber": 35,"name": "Bromine","atomicWeight": 79.904,"phase": "Liquid","ionization": 11.8138,"melting": -7.3,"boiling": 59,"electronegativity": 2.96,"type": 'Halogen',"group": 17,"group2": 'VIIA',"period": 4,"elecconfig": '[Ar] 3d10 4s2 4p5',"symbol": 'Br'},
                {"atomicNumber": 36,"name": "Krypton","atomicWeight": 83.798,"phase": "Gas","ionization": 13.9996,"melting": -157.36,"boiling": -153.22,"electronegativity": 3,"type": 'Noble Gas',"group": 18,"group2": 'VIIIA',"period": 4,"elecconfig": '[Ar] 3d10 4s2 4p6',"symbol": 'Kr'},
                {"atomicNumber": 37,"name": "Rubidium","atomicWeight": 85.4678,"phase": "Solid","ionization": 4.1771,"melting": 39.31,"boiling": 688,"electronegativity": 0.82,"type": 'Alkali Metal',"group": 1,"group2": 'IA',"period": 5,"elecconfig": '[Kr] 5s1',"symbol": 'Rb'},
                {"atomicNumber": 38,"name": "Strontium","atomicWeight": 87.62,"phase": "Solid","ionization": 5.6949,"melting": 777,"boiling": 1382,"electronegativity": 0.95,"type": 'Alkaline Earth Metal',"group": 2,"group2": 'IIA',"period": 5,"elecconfig": '[Kr] 5s2',"symbol": 'Sr'},
                {"atomicNumber": 39,"name": "Yttrium","atomicWeight": 88.90585,"phase": "Solid","ionization": 6.2173,"melting": 1526,"boiling": 3345,"electronegativity": 1.22,"type": 'Transition Metal',"group": 3,"group2": 'IIIB',"period": 5,"elecconfig": '[Kr] 4d1 5s2',"symbol": 'Y'},
                {"atomicNumber": 40,"name": "Zirconium","atomicWeight": 91.224,"phase": "Solid","ionization": 6.6339,"melting": 1855,"boiling": 4409,"electronegativity": 1.33,"type": 'Transition Metal',"group": 4,"group2": 'IVB',"period": 5,"elecconfig": '[Kr] 4d2 5s2',"symbol": 'Zr'},
                {"atomicNumber": 41,"name": "Niobium","atomicWeight": 92.90638,"phase": "Solid","ionization": 6.7589,"melting": 2477,"boiling": 4744,"electronegativity": 1.6,"type": 'Transition Metal',"group": 5,"group2": 'VB',"period": 5,"elecconfig": '[Kr] 4d4 5s1',"symbol": 'Nb'},
                {"atomicNumber": 42,"name": "Molybdenum","atomicWeight": 95.94,"phase": "Solid","ionization": 7.0924,"melting": 2623,"boiling": 4639,"electronegativity": 2.16,"type": 'Transition Metal',"group": 6,"group2": 'VIB',"period": 5,"elecconfig": '[Kr] 4d5 5s1',"symbol": 'Mo'},
                {"atomicNumber": 43,"name": "Technetium","atomicWeight": (98),"phase": "Synthetic","ionization": 7.28,"melting": 2157,"boiling": 4265,"electronegativity": 1.9,"type": 'Transition Metal',"group": 7,"group2": 'VIIB',"period": 5,"elecconfig": '[Kr] 4d5 5s2',"symbol": 'Tc'},
                {"atomicNumber": 44,"name": "Ruthenium","atomicWeight": 101.07,"phase": "Solid","ionization": 7.3605,"melting": 2334,"boiling": 4150,"electronegativity": 2.2,"type": 'Transition Metal',"group": 8,"group2": 'VIIIB',"period": 5,"elecconfig": '[Kr] 4d7 5s1',"symbol": 'Ru'},
                {"atomicNumber": 45,"name": "Rhodium","atomicWeight": 102.9055,"phase": "Solid","ionization": 7.4589,"melting": 1964,"boiling": 3695,"electronegativity": 2.28,"type": 'Transition Metal',"group": 9,"group2": 'VIIIB',"period": 5,"elecconfig": '[Kr] 4d8 5s1',"symbol": 'Rh'},
                {"atomicNumber": 46,"name": "Palladium","atomicWeight": 106.42,"phase": "Solid","ionization": 8.3369,"melting": 1554.9,"boiling": 2963,"electronegativity": 2.2,"type": 'Transition Metal',"group": 10,"group2": 'VIIIB',"period": 5,"elecconfig": '[Kr] 4d10',"symbol": 'Pd'},
                {"atomicNumber": 47,"name": "Silver","atomicWeight": 107.8682,"phase": "Solid","ionization": 7.5762,"melting": 961.78,"boiling": 2162,"electronegativity": 1.93,"type": 'Transition Metal',"group": 11,"group2": 'IB',"period": 5,"elecconfig": '[Kr] 4d10 5s1',"symbol": 'Ag'},
                {"atomicNumber": 48,"name": "Cadmium","atomicWeight": 112.411,"phase": "Solid","ionization": 8.9938,"melting": 321.07,"boiling": 767,"electronegativity": 1.69,"type": 'Transition Metal',"group": 12,"group2": 'IIB',"period": 5,"elecconfig": '[Kr] 4d10 5s2',"symbol": 'Cd'},
                {"atomicNumber": 49,"name": "Indium","atomicWeight": 114.818,"phase": "Solid","ionization": 5.7864,"melting": 156.6,"boiling": 2072,"electronegativity": 1.78,"type": 'Poor Metal',"group": 13,"group2": 'IIIA',"period": 5,"elecconfig": '[Kr] 4d10 5s2 5p1',"symbol": 'In'},
                {"atomicNumber": 50,"name": "Tin","atomicWeight": 118.71,"phase": "Solid","ionization": 7.3439,"melting": 231.93,"boiling": 2602,"electronegativity": 1.96,"type": 'Poor Metal',"group": 14,"group2": 'IVA',"period": 5,"elecconfig": '[Kr] 4d10 5s2 5p2',"symbol": 'Sn'},
                {"atomicNumber": 51,"name": "Antimony","atomicWeight": 121.76,"phase": "Solid","ionization": 8.6084,"melting": 630.63,"boiling": 1587,"electronegativity": 2.05,"type": 'Metalloids',"group": 15,"group2": 'VA',"period": 5,"elecconfig": '[Kr] 4d10 5s2 5p3',"symbol": 'Sb'},
                {"atomicNumber": 52,"name": "Tellurium","atomicWeight": 127.6,"phase": "Solid","ionization": 9.0096,"melting": 449.51,"boiling": 988,"electronegativity": 2.1,"type": 'Metalloids',"group": 16,"group2": 'VIA',"period": 5,"elecconfig": '[Kr] 4d10 5s2 5p4',"symbol": 'Te'},
                {"atomicNumber": 53,"name": "Iodine","atomicWeight": 126.90447,"phase": "Solid","ionization": 10.4513,"melting": 113.7,"boiling": 184.3,"electronegativity": 2.66,"type": 'Halogen',"group": 17,"group2": 'VIIA',"period": 5,"elecconfig": '[Kr] 4d10 5s2 5p5',"symbol": 'I'},
                {"atomicNumber": 54,"name": "Xenon","atomicWeight": 131.293,"phase": "Gas","ionization": 12.1298,"melting": -111.8,"boiling": -108,"electronegativity": 2.6,"type": 'Noble Gas',"group": 18,"group2": 'VIIIA',"period": 5,"elecconfig": '[Kr] 4d10 5s2 5p6',"symbol": 'Xe'},
                {"atomicNumber": 55,"name": "Cesium","atomicWeight": 132.90545,"phase": "Solid","ionization": 3.8939,"melting": 28.44,"boiling": 671,"electronegativity": 0.79,"type": 'Alkali Metal',"group": 1,"group2": 'IA',"period": 6,"elecconfig": '[Xe] 6s1',"symbol": 'Cs'},
                {"atomicNumber": 56,"name": "Barium","atomicWeight": 137.327,"phase": "Solid","ionization": 5.2117,"melting": 727,"boiling": 1870,"electronegativity": 0.89,"type": 'Alkaline Earth Metal',"group": 2,"group2": 'IIA',"period": 6,"elecconfig": '[Xe] 6s2',"symbol": 'Ba'},
                {"atomicNumber": 57,"name": "Lanthanum","atomicWeight": 138.9055,"phase": "Solid","ionization": 5.5769,"melting": 920,"boiling": 3464,"electronegativity": 1.1,"type": 'Rare Earth Metal',"group": 3,"group2": 'Lanthanides',"period": 6,"elecconfig": '[Xe] 5d1 6s2',"symbol": 'La'},
                {"atomicNumber": 58,"name": "Cerium","atomicWeight": 140.116,"phase": "Solid","ionization": 5.5387,"melting": 798,"boiling": 3360,"electronegativity": 1.12,"type": 'Rare Earth Metal',"group": 101,"group2": 'Lanthanides',"period": 6,"elecconfig": '[Xe] 4f1 5d1 6s2',"symbol": 'Ce'},
                {"atomicNumber": 59,"name": "Praseodymium","atomicWeight": 140.90765,"phase": "Solid","ionization": 5.473,"melting": 931,"boiling": 3290,"electronegativity": 1.13,"type": 'Rare Earth Metal',"group": 101,"group2": 'Lanthanides',"period": 6,"elecconfig": '[Xe] 4f3 6s2',"symbol": 'Pr'},
                {"atomicNumber": 60,"name": "Neodymium","atomicWeight": 144.24,"phase": "Solid","ionization": 5.525,"melting": 1021,"boiling": 3100,"electronegativity": 1.14,"type": 'Rare Earth Metal',"group": 101,"group2": 'Lanthanides',"period": 6,"elecconfig": '[Xe] 4f4 6s2',"symbol": 'Nd'},
                {"atomicNumber": 61,"name": "Promethium","atomicWeight": (145),"phase": "Synthetic","ionization": 5.582,"melting": 1100,"boiling": 3000,"electronegativity": NaN,"type": 'Rare Earth Metal',"group": 101,"group2": 'Lanthanides',"period": 6,"elecconfig": '[Xe] 4f5 6s2',"symbol": 'Pm'},
                {"atomicNumber": 62,"name": "Samarium","atomicWeight": 150.36,"phase": "Solid","ionization": 5.6437,"melting": 1072,"boiling": 1803,"electronegativity": 1.17,"type": 'Rare Earth Metal',"group": 101,"group2": 'Lanthanides',"period": 6,"elecconfig": '[Xe] 4f6 6s2',"symbol": 'Sm'},
                {"atomicNumber": 63,"name": "Europium","atomicWeight": 151.964,"phase": "Solid","ionization": 5.6704,"melting": 822,"boiling": 1527,"electronegativity": NaN,"type": 'Rare Earth Metal',"group": 101,"group2": 'Lanthanides',"period": 6,"elecconfig": '[Xe] 4f7 6s2',"symbol": 'Eu'},
                {"atomicNumber": 64,"name": "Gadolinium","atomicWeight": 157.25,"phase": "Solid","ionization": 6.1498,"melting": 1313,"boiling": 3250,"electronegativity": 1.2,"type": 'Rare Earth Metal',"group": 101,"group2": 'Lanthanides',"period": 6,"elecconfig": '[Xe] 4f7 5d1 6s2',"symbol": 'Gd'},
                {"atomicNumber": 65,"name": "Terbium","atomicWeight": 158.92534,"phase": "Solid","ionization": 5.8638,"melting": 1356,"boiling": 3230,"electronegativity": NaN,"type": 'Rare Earth Metal',"group": 101,"group2": 'Lanthanides',"period": 6,"elecconfig": '[Xe] 4f9 6s2',"symbol": 'Tb'},
                {"atomicNumber": 66,"name": "Dysprosium","atomicWeight": 162.5,"phase": "Solid","ionization": 5.9389,"melting": 1412,"boiling": 2567,"electronegativity": 1.22,"type": 'Rare Earth Metal',"group": 101,"group2": 'Lanthanides',"period": 6,"elecconfig": '[Xe] 4f10 6s2',"symbol": 'Dy'},
                {"atomicNumber": 67,"name": "Holmium","atomicWeight": 164.93032,"phase": "Solid","ionization": 6.0215,"melting": 1474,"boiling": 2700,"electronegativity": 1.23,"type": 'Rare Earth Metal',"group": 101,"group2": 'Lanthanides',"period": 6,"elecconfig": '[Xe] 4f11 6s2',"symbol": 'Ho'},
                {"atomicNumber": 68,"name": "Erbium","atomicWeight": 167.259,"phase": "Solid","ionization": 6.1077,"melting": 1497,"boiling": 2868,"electronegativity": 1.24,"type": 'Rare Earth Metal',"group": 101,"group2": 'Lanthanides',"period": 6,"elecconfig": '[Xe] 4f12 6s2',"symbol": 'Er'},
                {"atomicNumber": 69,"name": "Thulium","atomicWeight": 168.93421,"phase": "Solid","ionization": 6.1843,"melting": 1545,"boiling": 1950,"electronegativity": 1.25,"type": 'Rare Earth Metal',"group": 101,"group2": 'Lanthanides',"period": 6,"elecconfig": '[Xe] 4f13 6s2',"symbol": 'Tm'},
                {"atomicNumber": 70,"name": "Ytterbium","atomicWeight": 173.04,"phase": "Solid","ionization": 6.2542,"melting": 819,"boiling": 1196,"electronegativity": NaN,"type": 'Rare Earth Metal',"group": 101,"group2": 'Lanthanides',"period": 6,"elecconfig": '[Xe] 4f14 6s2',"symbol": 'Yb'},
                {"atomicNumber": 71,"name": "Lutetium","atomicWeight": 174.967,"phase": "Solid","ionization": 5.4259,"melting": 1663,"boiling": 3402,"electronegativity": 1.27,"type": 'Rare Earth Metal',"group": 101,"group2": 'Lanthanides',"period": 6,"elecconfig": '[Xe] 4f14 5d1 6s2',"symbol": 'Lu'},
                {"atomicNumber": 72,"name": "Hafnium","atomicWeight": 178.49,"phase": "Solid","ionization": 6.8251,"melting": 2233,"boiling": 4603,"electronegativity": 1.3,"type": 'Transition Metal',"group": 4,"group2": 'IVB',"period": 6,"elecconfig": '[Xe] 4f14 5d2 6s2',"symbol": 'Hf'},
                {"atomicNumber": 73,"name": "Tantalum","atomicWeight": 180.9479,"phase": "Solid","ionization": 7.5496,"melting": 3017,"boiling": 5458,"electronegativity": 1.5,"type": 'Transition Metal',"group": 5,"group2": 'VB',"period": 6,"elecconfig": '[Xe] 4f14 5d3 6s2',"symbol": 'Ta'},
                {"atomicNumber": 74,"name": "Tungsten","atomicWeight": 183.84,"phase": "Solid","ionization": 7.864,"melting": 3422,"boiling": 5555,"electronegativity": 2.36,"type": 'Transition Metal',"group": 6,"group2": 'VIB',"period": 6,"elecconfig": '[Xe] 4f14 5d4 6s2',"symbol": 'W'},
                {"atomicNumber": 75,"name": "Rhenium","atomicWeight": 186.207,"phase": "Solid","ionization": 7.8335,"melting": 3186,"boiling": 5596,"electronegativity": 1.9,"type": 'Transition Metal',"group": 7,"group2": 'VIIB',"period": 6,"elecconfig": '[Xe] 4f14 5d5 6s2',"symbol": 'Re'},
                {"atomicNumber": 76,"name": "Osmium","atomicWeight": 190.23,"phase": "Solid","ionization": 8.4382,"melting": 3033,"boiling": 5012,"electronegativity": 2.2,"type": 'Transition Metal',"group": 8,"group2": 'VIIIB',"period": 6,"elecconfig": '[Xe] 4f14 5d6 6s2',"symbol": 'Os'},
                {"atomicNumber": 77,"name": "Iridium","atomicWeight": 192.217,"phase": "Solid","ionization": 8.967,"melting": 2466,"boiling": 4428,"electronegativity": 2.2,"type": 'Transition Metal',"group": 9,"group2": 'VIIIB',"period": 6,"elecconfig": '[Xe] 4f14 5d7 6s2',"symbol": 'Ir'},
                {"atomicNumber": 78,"name": "Platinum","atomicWeight": 195.078,"phase": "Solid","ionization": 8.9588,"melting": 1768.3,"boiling": 3825,"electronegativity": 2.28,"type": 'Transition Metal',"group": 10,"group2": 'VIIIB',"period": 6,"elecconfig": '[Xe] 4f14 5d9 6s1',"symbol": 'Pt'},
                {"atomicNumber": 79,"name": "Gold","atomicWeight": 196.96655,"phase": "Solid","ionization": 9.2255,"melting": 1064.18,"boiling": 2856,"electronegativity": 2.54,"type": 'Transition Metal',"group": 11,"group2": 'IB',"period": 6,"elecconfig": '[Xe] 4f14 5d10 6s1',"symbol": 'Au'},
                {"atomicNumber": 80,"name": "Mercury","atomicWeight": 200.59,"phase": "Liquid","ionization": 10.4375,"melting": -38.83,"boiling": 356.73,"electronegativity": 2,"type": 'Transition Metal',"group": 12,"group2": 'IIB',"period": 6,"elecconfig": '[Xe] 4f14 5d10 6s2',"symbol": 'Hg'},
                {"atomicNumber": 81,"name": "Thallium","atomicWeight": 204.3833,"phase": "Solid","ionization": 6.1082,"melting": 304,"boiling": 1473,"electronegativity": 1.62,"type": 'Poor Metal',"group": 13,"group2": 'IIIA',"period": 6,"elecconfig": '[Hg] 6p1',"symbol": 'Tl'},
                {"atomicNumber": 82,"name": "Lead","atomicWeight": 207.2,"phase": "Solid","ionization": 7.4167,"melting": 327.46,"boiling": 1749,"electronegativity": 2.33,"type": 'Poor Metal',"group": 14,"group2": 'IVA',"period": 6,"elecconfig": '[Hg] 6p2',"symbol": 'Pb'},
                {"atomicNumber": 83,"name": "Bismuth","atomicWeight": 208.98038,"phase": "Solid","ionization": 7.2855,"melting": 271.3,"boiling": 1564,"electronegativity": 2.02,"type": 'Poor Metal',"group": 15,"group2": 'VA',"period": 6,"elecconfig": '[Hg] 6p3',"symbol": 'Bi'},
                {"atomicNumber": 84,"name": "Polonium","atomicWeight": (209),"phase": "Solid","ionization": 8.414,"melting": 254,"boiling": 962,"electronegativity": 2,"type": 'Metalloids',"group": 16,"group2": 'VIA',"period": 6,"elecconfig": '[Hg] 6p4',"symbol": 'Po'},
                {"atomicNumber": 85,"name": "Astatine","atomicWeight": (210),"phase": "Solid","ionization": NaN,"melting": 302,"boiling": NaN,"electronegativity": 2.2,"type": 'Halogen',"group": 17,"group2": 'VIIA',"period": 6,"elecconfig": '[Hg] 6p5',"symbol": 'At'},
                {"atomicNumber": 86,"name": "Radon","atomicWeight": (222),"phase": "Gas","ionization": 10.7485,"melting": -71,"boiling": -61.7,"electronegativity": NaN,"type": 'Noble Gas',"group": 18,"group2": 'VIIIA',"period": 6,"elecconfig": '[Hg] 6p6',"symbol": 'Rn'},
                {"atomicNumber": 87,"name": "Francium","atomicWeight": (223),"phase": "Solid","ionization": 4.0727,"melting": NaN,"boiling": NaN,"electronegativity": 0.7,"type": 'Alkali Metal',"group": 1,"group2": 'IA',"period": 7,"elecconfig": '[Rn] 7s1',"symbol": 'Fr'},
                {"atomicNumber": 88,"name": "Radium","atomicWeight": (226),"phase": "Solid","ionization": 5.2784,"melting": 700,"boiling": 1737,"electronegativity": 0.9,"type": 'Alkaline Earth Metal',"group": 2,"group2": 'IIA',"period": 7,"elecconfig": '[Rn] 7s2',"symbol": 'Ra'},
                {"atomicNumber": 89,"name": "Actinium","atomicWeight": (227),"phase": "Solid","ionization": 5.17,"melting": 1050,"boiling": 3200,"electronegativity": 1.1,"type": 'Rare Earth Metal',"group": 3,"group2": 'Actinides',"period": 7,"elecconfig": '[Rn] 6d1 7s2',"symbol": 'Ac'},
                {"atomicNumber": 90,"name": "Thorium","atomicWeight": 232.0381,"phase": "Solid","ionization": 6.3067,"melting": 1750,"boiling": 4820,"electronegativity": 1.3,"type": 'Rare Earth Metal',"group": 102,"group2": 'Actinides',"period": 7,"elecconfig": '[Rn] 6d2 7s2',"symbol": 'Th'},
                {"atomicNumber": 91,"name": "Protactinium","atomicWeight": 231.03588,"phase": "Solid","ionization": 5.89,"melting": 1572,"boiling": 4000,"electronegativity": 1.5,"type": 'Rare Earth Metal',"group": 102,"group2": 'Actinides',"period": 7,"elecconfig": '[Rn] 5f2 6d1 7s2',"symbol": 'Pa'},
                {"atomicNumber": 92,"name": "Uranium","atomicWeight": 238.02891,"phase": "Solid","ionization": 6.1941,"melting": 1135,"boiling": 3927,"electronegativity": 1.38,"type": 'Rare Earth Metal',"group": 102,"group2": 'Actinides',"period": 7,"elecconfig": '[Rn] 5f3 6d1 7s2',"symbol": 'U'},
                {"atomicNumber": 93,"name": "Neptunium","atomicWeight": (237),"phase": "Synthetic","ionization": 6.2657,"melting": 644,"boiling": 4000,"electronegativity": 1.36,"type": 'Rare Earth Metal',"group": 102,"group2": 'Actinides',"period": 7,"elecconfig": '[Rn] 5f4 6d1 7s2',"symbol": 'Np'},
                {"atomicNumber": 94,"name": "Plutonium","atomicWeight": (244),"phase": "Synthetic","ionization": 6.026,"melting": 640,"boiling": 3230,"electronegativity": 1.28,"type": 'Rare Earth Metal',"group": 102,"group2": 'Actinides',"period": 7,"elecconfig": '[Rn] 5f6 7s2',"symbol": 'Pu'},
                {"atomicNumber": 95,"name": "Americium","atomicWeight": (243),"phase": "Synthetic","ionization": 5.9738,"melting": 1176,"boiling": 2011,"electronegativity": 1.3,"type": 'Rare Earth Metal',"group": 102,"group2": 'Actinides',"period": 7,"elecconfig": '[Rn] 5f7 7s2',"symbol": 'Am'},
                {"atomicNumber": 96,"name": "Curium","atomicWeight": (247),"phase": "Synthetic","ionization": 5.9914,"melting": 1345,"boiling": 3110,"electronegativity": 1.3,"type": 'Rare Earth Metal',"group": 102,"group2": 'Actinides',"period": 7,"elecconfig": '[Rn] 5f7 6d 7s2',"symbol": 'Cm'}           ]
        };

        return periodicData.elements;


    };



    return {
        getCssClassElement : getCssClassElement,
        getElements: getElements
    };
});

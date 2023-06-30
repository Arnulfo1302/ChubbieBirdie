
total2023 = int(input("Cantidad fotos del 2023:"));
total2022 = int(input("Cantidad fotos del 2022:"));
total2021 = int(input("Cantidad fotos del 2021:"));
total2020 = int(input("Cantidad fotos del 2020:"));
totalfotos = total2020+total2021+total2022+total2023
for i in range(totalfotos):
    if (i == 0):print("//-------------------2023---------------")
    if (total2023 >= 1):
        print("/*{}*/{{ fecha: \"2023\", descripcion: \"\", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/{}.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/{}.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/{}.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/{}.png'}},".format(i+1, i+1,i+1,i+1,i+1))
        total2023 -=1
        if(total2023==0):print("//-------------------2022---------------")
        i + 1
    elif (total2022 >= 1):
        print("/*{}*/{{ fecha: \"2022\", descripcion: \"\", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/{}.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/{}.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/{}.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/{}.png'}},".format(i+1, i+1,i+1,i+1,i+1))
        total2022 -=1
        if(total2022==0):print("//-------------------2021---------------")
        i + 1
    elif (total2021 >= 1):
        print("/*{}*/{{ fecha: \"2021\", descripcion: \"\", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/{}.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/{}.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/{}.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/{}.png'}},".format(i+1, i+1,i+1,i+1,i+1))
        total2021 -=1
        if(total2021==0):print("//-------------------2020---------------")
        i + 1
    elif (total2020 >= 1):
        print("/*{}*/{{ fecha: \"2020\", descripcion: \"\", srcw:'./build/img/Fan_Art/+1600px/Todas_+1600px/{}.webp',srcpwf:'./build/img/Arte_Original/+1600px/Todas_+1600px-fullsize/{}.webp',srcp:'./build/img/Fan_Art/+1600px/Todas_+1600px/{}.png',srcpf:'./build/img/Fan_Art/+1600px/Todas_+1600px-fullsize/{}.png'}},".format(i+1, i+1,i+1,i+1,i+1))
        total2020 -=1
        i + 1
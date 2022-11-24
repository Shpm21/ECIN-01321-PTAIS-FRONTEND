export const isRutValid = (rut: string): boolean => {
    const dv = (T: any) => {
        let M = 0, S = 1
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11
        return S ? S - 1 : 'k'
    }

    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut))
        return false

    let tmp = rut.split('-')
    let digv = tmp[1]
    rut = tmp[0]
    if (digv == 'K') digv = 'k'
    return dv(rut) == digv
}

export const replaceRut = (rut: string): string => {
    const data = rut.split('-')
    return data[0] + data[1].toUpperCase()
}

export const getCapitalizeName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
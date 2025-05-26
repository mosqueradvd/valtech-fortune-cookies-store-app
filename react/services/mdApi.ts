
const ENTITY = 'CF'

const API_KEY = 'vtexappkey-valtech-QPYJRT'
const API_TOKEN = 'WYBLNNTOMTKTXRFJLMVUJZNYYOGCOGOOVGTXCMSRXTAJGQTFFEDHQMRXZLUEVQFUXQRTHOUFTVKLLWGCXDSJGBUJHCLFWQGUYEZHBHPKKLMTPYKHDOMUPJFHWWKXLXIO'

const base = `/api/dataentities/${ENTITY}`

const commonHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-VTEX-API-AppKey': API_KEY,
    'X-VTEX-API-AppToken': API_TOKEN,
    'X-Vtex-Use-Https': 'true',
}

import { FortuneCookie } from '../typings/FortuneCookie'

export async function listFortuneCookies(): Promise<FortuneCookie[]> {
    const url = `${base}/search?_fields=id,CookieFortune&_schema=public&_t=${Date.now()}`
    const res = await fetch(url, {
        method: 'GET',
        headers: { ...commonHeaders, 'REST-Range': 'resources=0-400' },
    })
    if (!res.ok) throw new Error(`MD list ${res.status}`)

    const raw: { id: string; CookieFortune: string }[] = await res.json()
    return raw.map(r => ({ id: r.id, text: r.CookieFortune }))
}

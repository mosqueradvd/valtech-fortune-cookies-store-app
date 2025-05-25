import { useState, useCallback, useEffect } from 'react'
import * as MD from '../services/mdApi'
import { FortuneCookie } from '../typings/FortuneCookie'

export function useFortuneCookies() {
    const [data, setData] = useState<FortuneCookie[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const refresh = useCallback(async () => {
        setLoading(true)
        try {
            const list = await MD.listFortuneCookies()
            setData(list)
            setError(null)
        } catch (e) {
            setError((e as Error).message)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => { refresh() }, [refresh])


    return { data, loading, error, refresh }
}

import React, { useState, useEffect } from 'react'
import { Spinner } from 'vtex.styleguide'
import { useFortuneCookies } from '../../hooks/useFortuneCookies'
import { FortuneCookie } from '../../typings/FortuneCookie'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
    'fortuneCookieMainBtn',
    'fortuneCookieMainText',
    'fortuneCookieMainContainer',
    'fortuneCookieCard',
    'fortuneCookieLeft',
    'fortuneCookieRight',
    'fortuneCookiePhrase'
] as const

const randomLuckyNumber = () => {
    const pad = (n: number, len = 2) => n.toString().padStart(len, '0')
    const a = pad(Math.floor(Math.random() * 100))
    const b = pad(Math.floor(Math.random() * 100))
    const c = pad(Math.floor(Math.random() * 10000), 4)
    return `${a}-${b}-${c}`
}

const IMAGE_URL =
    'https://i.imgur.com/mbmTTSW.png'

const FortuneCard: React.FC = () => {
    const handles = useCssHandles(CSS_HANDLES)
    const { data, loading: listLoading, refresh } = useFortuneCookies()

    const [phrase, setPhrase] = useState<string | null>(null)
    const [luckyNum, setLuckyNum] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => { refresh() }, [refresh])

    const showRandom = async () => {
        setPhrase(null); setLuckyNum(null); setLoading(true)

        if (!data.length) await refresh()
        const pool: FortuneCookie[] = data.length ? data : []

        if (pool.length) {
            const item = pool[Math.floor(Math.random() * pool.length)]
            await new Promise(r => setTimeout(r, 400))
            setPhrase(item.text)
            setLuckyNum(randomLuckyNumber())
        }

        setLoading(false)
    }

    return (
        <div className={`${handles.fortuneCookieCard} center`}>
            <div className={handles.fortuneCookieLeft}>
                {phrase ? (
                    <>
                        <h3 className={handles.fortuneCookiePhrase}>{phrase}</h3>
                        <h5 className="mt4 white">Número de la suerte: {luckyNum}</h5>
                    </>
                ) : (
                    !listLoading && <p className="tc white">Haz clic para conocer tu fortuna</p>
                )}

                <button
                    className={handles.fortuneCookieMainBtn}
                    disabled={loading || listLoading}
                    onClick={showRandom}
                >
                    {loading || listLoading ? <Spinner size={18} /> : 'Obtener galleta 🍪'}
                </button>
            </div>

            <div className={handles.fortuneCookieRight}>
                <img src={IMAGE_URL} alt="Fortune cookie" className="w-70 w-50-ns" />
            </div>
        </div>
    )
}

export default FortuneCard

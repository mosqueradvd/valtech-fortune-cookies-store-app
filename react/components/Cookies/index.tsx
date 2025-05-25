import React, { useState, useEffect, useCallback } from 'react'
import { Spinner } from 'vtex.styleguide'
import { useCssHandles } from 'vtex.css-handles'
import { useIntl } from 'react-intl'

import { useFortuneCookies } from '../../hooks/useFortuneCookies'
import { randomLuckyNumber } from '../../utils/randomLuckyNumber'
import { FortuneCookie } from '../../typings/FortuneCookie'

const CSS_HANDLES = [
    'fortuneCookieMainBtn',
    'fortuneCookieMainText',
    'fortuneCookieMainContainer',
    'fortuneCookieCard',
    'fortuneCookieLeft',
    'fortuneCookieRight',
    'fortuneCookiePhrase',
] as const

const MIN_DELAY = 400
const IMAGE_URL = 'https://i.imgur.com/mbmTTSW.png'

const FortuneCard: React.FC = () => {
    const intl = useIntl()
    const handles = useCssHandles(CSS_HANDLES)
    const { data, loading: listLoading, refresh } = useFortuneCookies()

    const [phrase, setPhrase] = useState<string | null>(null)
    const [luckyNum, setLuckyNum] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => { refresh() }, [refresh])

    const showRandom = useCallback(async () => {
        setPhrase(null)
        setLuckyNum(null)
        setLoading(true)

        if (!data.length) await refresh()
        const pool: FortuneCookie[] = data.length ? data : []

        if (pool.length) {
            const item = pool[Math.floor(Math.random() * pool.length)]
            await new Promise(r => setTimeout(r, MIN_DELAY))
            setPhrase(item.text)
            setLuckyNum(randomLuckyNumber())
        }

        setLoading(false)
    }, [data, refresh])

    return (
        <div className={`${handles.fortuneCookieCard} center`}>
            <div className={handles.fortuneCookieLeft}>
                {phrase ? (
                    <>
                        <h3 className={handles.fortuneCookiePhrase}>{phrase}</h3>
                        <h5 className="mt4 white">
                            {intl.formatMessage({ id: 'valtech.fortune-cookies.lucky-number' })}{' '}
                            {luckyNum}
                        </h5>
                    </>
                ) : (
                    !listLoading && (
                        <p className="tc white">
                            {intl.formatMessage({ id: 'valtech.fortune-cookies.click-fortune' })}
                        </p>
                    )
                )}

                <button
                    className={handles.fortuneCookieMainBtn}
                    disabled={loading || listLoading}
                    onClick={showRandom}
                >
                    {(loading || listLoading)
                        ? <Spinner size={18} />
                        : intl.formatMessage({ id: 'valtech.fortune-cookies.get-cookie' })}
                </button>
            </div>

            <div className={handles.fortuneCookieRight}>
                <img
                    src={IMAGE_URL}
                    loading="lazy"
                    alt={intl.formatMessage({ id: 'valtech.fortune-cookies.image-alt' })}
                    className="w-70 w-50-ns"
                />
            </div>
        </div>
    )
}

export default FortuneCard

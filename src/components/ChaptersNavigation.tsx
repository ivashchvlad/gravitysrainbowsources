import * as React from 'react'

interface Props {
    handleClick: (e: any) => void
}

export default function ChaptersNavigation({handleClick}: Props) {

    const chapters = (chapter: number, length: number) => {
        let res = []
        for (let i = 1; i <= length; i++) {
            res.push(
                <a
                    href={`#${chapter}-${i}`}
                    key={i}
                    onClick={handleClick}
                >
                    [{i}]
                </a>
            )
        }
        return res
    }

    return (
        <>
            <h4><a href="#chapter-1" onClick={handleClick}>I: Beyound the Zero</a></h4>
            <ul>
                <li>{chapters(1, 21)}</li>
            </ul>
            <h4><a href="#chapter-2" onClick={handleClick}>II: UN PERM'AU CASINO HERMANN GOERING</a></h4>
            <ul>
                <li>
                    {chapters(2, 8)}
                </li>
            </ul>
            <h4><a href="#chapter-3" onClick={handleClick}>III: IN THE ZONE</a></h4>
            <ul>
                <li>
                    {chapters(3, 32)}
                </li>
            </ul>
            <h4><a href="#chapter-4" onClick={handleClick}>IV: The Counterforce</a></h4>
            <ul>
                <li>
                    {chapters(4, 12)}
                </li>
            </ul>
        </>
    )
}

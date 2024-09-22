import queryString from "querystring";
import { userAgents } from "./file.js";

export function setDelay(s) {
    return new Promise((resolve) => setTimeout(resolve, s * 1000));
}

export function extractUsernameFromTgHash(hash) {
    try {
        const parsedQuery = queryString.parse(hash);
        const userParsed = JSON.parse(parsedQuery.user);
        return userParsed.username;
    } catch (err) {
        throw err;
    }
}

export function extractIdFromTgHash(hash) {
    try {
        const parsedQuery = queryString.parse(hash);
        const userParsed = JSON.parse(parsedQuery.user);
        return userParsed.id;
    } catch (err) {
        throw err;
    }
}

export function getRandomUserAgent() {
    return userAgents[Math.floor(Math.random() * userAgents.length)];
}

export async function generateData(_0x5af0e0, _0x232284) {
    const _0x33518b = _0x5af0e0.data.gameTag;
    const _0x290b46 = _0x5af0e0.data.cryptoMinerConfig.itemSettingList
        .map((_0x58e8d7) => (_0x58e8d7.type !== "TRAP" ? _0x58e8d7 : null))
        .filter((_0xc4d0bd) => _0xc4d0bd !== null);
    let _0x1ad7b4 = "";
    let _0x29ba7a = 0;
    const _0x319fbd = _0x290b46.reduce(
        (_0x5d7d70, _0x113be7) =>
            _0x5d7d70 +
            _0x113be7.rewardValueList.reduce(
                (_0x44d4cf, _0x242af8) => _0x44d4cf + _0x242af8,
                0
            ),
        0
    );
    for (const _0x8d84f3 of _0x290b46) {
        for (const _0x13fe2a of _0x8d84f3.rewardValueList) {
            const _0x4dec7c = Date.now();
            const _0x2194c9 = (Math.random() * 209 + 130).toFixed(3);
            const _0x1f5363 = (Math.random() * 49 + 200).toFixed(3);
            const _0x496826 = (Math.random() * 2 - 1).toFixed(3);
            const _0xa70fec = (Math.random() * 137 + 112).toFixed(3);
            const _0x2a5692 = (Math.random() * 249 + 250).toFixed(3);
            const _0x1e6552 = _0x8d84f3.type === "REWARD" ? 1 : 2;
            const _0x5c4a2a = _0x8d84f3.size;
            const _0x22dbc8 =
                _0x8d84f3.type === "BONUS"
                    ? _0x8d84f3.size + _0x8d84f3.rewardValueList[0]
                    : (Math.random() * 198 + 1).toFixed(0);
            _0x1ad7b4 +=
                _0x4dec7c +
                "|" +
                _0x2194c9 +
                "|" +
                _0x1f5363 +
                "|" +
                _0x496826 +
                "|" +
                _0xa70fec +
                "|" +
                _0x2a5692 +
                "|" +
                _0x1e6552 +
                "|" +
                _0x5c4a2a +
                "|" +
                _0x22dbc8;
            _0x29ba7a++;
            if (
                _0x29ba7a <
                _0x290b46.reduce(
                    (_0x146e52, _0x1a1316) =>
                        _0x146e52 + _0x1a1316.rewardValueList.length,
                    0
                )
            ) {
                _0x1ad7b4 += ";";
            }
            await setDelay(
                _0x232284 ? 0.5 : (Math.random() * 2 + 1).toFixed(0)
            );
        }
    }
    const _0x28cdaf = {
        data: _0x1ad7b4,
        gameTag: _0x33518b,
        score: _0x319fbd,
    };
    return _0x28cdaf;
}

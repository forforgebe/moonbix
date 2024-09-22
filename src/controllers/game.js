import { Main, Auth, Game } from "./main.js";
import {
    setDelay,
    extractIdFromTgHash,
    getRandomUserAgent,
    generateData,
} from "../utils/helpers.js";
import { tgHashes } from "../utils/file.js";
import { app } from "../config.js";
import { PromisePool } from "@supercharge/promise-pool";
import logger from "../utils/logger.js";
import schedule from "node-schedule";

function _0x45b061(_0x2bcf5d, _0x5719a0, _0x5ceb5a, _0x194f7c, _0x1abfd5) {
    return _0x2f66(_0x5ceb5a - 0x361, _0x1abfd5);
}
function _0x2f66(_0x18ca1e, _0xcc05ef) {
    const _0x31bf24 = _0x49d9();
    return (
        (_0x2f66 = function (_0x20e608, _0x4ae8a4) {
            _0x20e608 = _0x20e608 - (-0x1 * 0x197c + 0x1bb1 + -0x5a);
            let _0x5654b9 = _0x31bf24[_0x20e608];
            return _0x5654b9;
        }),
        _0x2f66(_0x18ca1e, _0xcc05ef)
    );
}
function _0x5a7d9f(_0x1ede47, _0x33b414, _0x4511d8, _0x5cf5cc, _0x1748fb) {
    return _0x2f66(_0x5cf5cc - -0x39, _0x4511d8);
}
function _0x4d3c3c(_0x2e35fc, _0x3a71db, _0x4334dc, _0x42091a, _0x47a2b1) {
    return _0x2f66(_0x2e35fc - -0x2cf, _0x3a71db);
}
(function (_0x576928, _0x251c63) {
    function _0x5efb31(_0x2170c, _0x376ea1, _0x52d073, _0x3cdbf0, _0x345834) {
        return _0x2f66(_0x52d073 - -0x293, _0x3cdbf0);
    }
    function _0x4987f9(_0xfc8a90, _0x3041cf, _0x159826, _0x59ce4f, _0x2a5317) {
        return _0x2f66(_0xfc8a90 - -0x102, _0x2a5317);
    }
    function _0x57a290(_0x3d1258, _0x3d88d7, _0x4ab813, _0x2dee13, _0x26bd2c) {
        return _0x2f66(_0x3d1258 - -0x219, _0x26bd2c);
    }
    function _0x54eb35(_0x594e83, _0x4e902d, _0x3fce9c, _0x1d2c40, _0xa900e4) {
        return _0x2f66(_0x3fce9c - 0xb4, _0x1d2c40);
    }
    function _0x1de002(_0x3c33a9, _0x2b20ae, _0x283ff3, _0x14a2cf, _0x4ba2e9) {
        return _0x2f66(_0x4ba2e9 - 0x49, _0x3c33a9);
    }
    const _0x27cdc9 = _0x576928();
    while (!![]) {
        try {
            const _0x2d5aea =
                (parseInt(_0x57a290(0x0, 0x2, -0x16, -0xb, -0x15)) /
                    (0x1b1 + 0x1 * -0x1f7d + -0x9ef * -0x3)) *
                    (-parseInt(_0x57a290(0x18, 0x39, 0x20, 0x2d, 0x1c)) /
                        (0x1f44 + 0xa * -0x29 + -0x1da8)) +
                (-parseInt(_0x4987f9(0x137, 0x14a, 0x108, 0x14e, 0x164)) /
                    (-0x1480 + 0xb5 * -0x25 + -0x1756 * -0x2)) *
                    (parseInt(_0x1de002(0x20a, 0x21c, 0x209, 0x236, 0x230)) /
                        (-0x1 * -0x15cd + -0x7fb * -0x1 + -0x1dc4)) +
                -parseInt(_0x5efb31(-0x82, -0x7d, -0x74, -0x89, -0x69)) /
                    (0x317 * 0x2 + 0x1393 * -0x1 + 0xd6a) +
                parseInt(_0x4987f9(0x12a, 0x134, 0x13f, 0x133, 0x151)) /
                    (-0x1172 + -0x12ce + 0x2446) +
                (-parseInt(_0x54eb35(0x285, 0x272, 0x29c, 0x294, 0x287)) /
                    (0x2de + -0xe23 + -0xc * -0xf1)) *
                    (parseInt(_0x5efb31(-0x79, -0x96, -0x8a, -0x6c, -0x64)) /
                        (-0xb5 * 0xd + -0x291 * -0x4 + 0x10b * -0x1)) +
                (-parseInt(_0x5efb31(-0x7d, -0x72, -0x7c, -0x43, -0x60)) /
                    (-0x5be + -0xe3a + -0x239 * -0x9)) *
                    (parseInt(_0x54eb35(0x2f5, 0x2ca, 0x2d0, 0x2b5, 0x2f5)) /
                        (-0x2486 + -0xc62 + -0x6fe * -0x7)) +
                (-parseInt(_0x1de002(0x27e, 0x28a, 0x2b7, 0x256, 0x28f)) /
                    (0x4 * 0x236 + 0x1db3 + -0xe0 * 0x2c)) *
                    (-parseInt(_0x4987f9(0x109, 0xfd, 0x124, 0x141, 0xfb)) /
                        (-0xfa * -0x26 + -0x1 * -0x1149 + -0x3659));
            if (_0x2d5aea === _0x251c63) break;
            else _0x27cdc9["push"](_0x27cdc9["shift"]());
        } catch (_0x1a58fb) {
            _0x27cdc9["push"](_0x27cdc9["shift"]());
        }
    }
})(_0x49d9, 0x2a10b + -0x7 * -0xb470 + 0x1 * -0x45b75);
function _0x49d9() {
    const _0x26b2eb = [
        "FtydW",
        "JhAqa",
        "kekVh",
        "ishGa",
        "Attem",
        "eft)",
        "706280QxknHi",
        "zMumO",
        "442452EpBFcX",
        "\x22\x20sta",
        "for",
        "\x20tick",
        "acces",
        "doPla",
        "se\x20wa",
        "metaI",
        "->\x20ga",
        "warn",
        "\x22\x20fin",
        "ied\x20o",
        "9Xhlpnl",
        "Eriqr",
        "75193JnbQkZ",
        "xNuPy",
        "yGame",
        "3452820yaoyDI",
        "GmqXn",
        "error",
        "1474475XdvhwP",
        "\x20*\x20*\x20",
        "nrbmI",
        "setUa",
        "ualif",
        "ished",
        "turbo",
        "withC",
        "fUBwQ",
        "skipp",
        "henti",
        "Worke",
        "]\x20get",
        "2435280wlMGoR",
        "e\x20\x22",
        "r\x20aut",
        "me\x20ca",
        "Mode",
        "2emqlEo",
        "]\x20use",
        "sched",
        "ncell",
        "]\x20gam",
        "user",
        "qobye",
        "nfo",
        "30SSCKuY",
        "rency",
        "r\x20is\x20",
        "proce",
        "ed)",
        "batch",
        "\x20info",
        "quali",
        "medAt",
        "getPa",
        "yload",
        "Optst",
        "RXkvY",
        "341uclYxe",
        "(plea",
        "KQTAR",
        "uleJo",
        "eft)\x20",
        "info",
        "login",
        "ets\x20l",
        "fouMT",
        "JxCSP",
        "BDoog",
        "pts",
        "ule",
        "rted\x20",
        "messa",
        "sToke",
        "nds)",
        "score",
        "143428bCMNxp",
        "21MhbOHK",
        "doFin",
        "diunS",
        "not\x20q",
        "it\x20",
        "now",
        "LNcXX",
        "r\x20ban",
        "\x20pts\x20",
        "fied",
        "paylo",
        "FmFWE",
        "ned\x20(",
        "NmgpD",
        "consu",
        "data",
        "play",
        "oncur",
        "DCCKH",
        "\x20seco",
        "dSwSX",
        "tempt",
        "total",
        "5\x20*/1",
        "cated",
        "gameT",
        "uwSVe",
    ];
    _0x49d9 = function () {
        return _0x26b2eb;
    };
    return _0x49d9();
}
class gameController {
    constructor() {
        function _0x42092c(
            _0x3787e8,
            _0x2726f0,
            _0x1b5554,
            _0x280375,
            _0x5af063
        ) {
            return _0x2f66(_0x3787e8 - 0x3dc, _0x2726f0);
        }
        function _0x2eb1a3(
            _0x56e99c,
            _0x23070c,
            _0x11b0b6,
            _0x34e704,
            _0x1f91bd
        ) {
            return _0x2f66(_0x23070c - 0x86, _0x11b0b6);
        }
        const _0x55ac7f = {};
        function _0x3727bd(
            _0x575e15,
            _0x29193d,
            _0x4f4570,
            _0x2d6a6c,
            _0x5b65d4
        ) {
            return _0x2f66(_0x4f4570 - -0x14c, _0x2d6a6c);
        }
        _0x55ac7f[_0x42092c(0x5fd, 0x5fe, 0x5e7, 0x601, 0x604)] = function (
            _0x36c2ee,
            _0x41924a
        ) {
            return _0x36c2ee === _0x41924a;
        };
        const _0x4960e7 = _0x55ac7f;
        function _0x531e5e(
            _0x4e41d8,
            _0x48c500,
            _0x17c93f,
            _0x154c87,
            _0x1b92ae
        ) {
            return _0x2f66(_0x48c500 - 0x1dc, _0x154c87);
        }
        function _0x6d37d5(
            _0x4c3348,
            _0xedaef8,
            _0x3a840d,
            _0x59c447,
            _0x4b7ea7
        ) {
            return _0x2f66(_0x3a840d - 0x37a, _0x4c3348);
        }
        this[
            _0x42092c(0x61a, 0x60e, 0x5e4, 0x62c, 0x63c) +
                _0x2eb1a3(0x2ce, 0x2b0, 0x2e9, 0x29e, 0x2be) +
                "r"
        ] = _0x4960e7[_0x531e5e(0x40a, 0x3fd, 0x3e5, 0x3fa, 0x402)](
            app[
                _0x2eb1a3(0x2a9, 0x2ab, 0x2d8, 0x2da, 0x2d2) +
                    _0x42092c(0x60c, 0x619, 0x5fd, 0x62c, 0x5f9)
            ],
            !![]
        )
            ? 0x2229 + -0x2 * 0xc7 + -0x2098
            : 0x33d * 0xa + 0x116 * 0x7 + -0x27fb;
    }
    async [_0x45b061(0x56e, 0x557, 0x559, 0x53b, 0x55f)]() {
        function _0x3592bc(
            _0x502604,
            _0x2d2119,
            _0x552d13,
            _0x1991f1,
            _0x444e86
        ) {
            return _0x45b061(
                _0x502604 - 0x17a,
                _0x2d2119 - 0x4b,
                _0x502604 - -0x651,
                _0x1991f1 - 0x68,
                _0x444e86
            );
        }
        function _0x39ad76(
            _0x4f9563,
            _0x24a96d,
            _0x84b70,
            _0x4910ca,
            _0xda84a8
        ) {
            return _0x45b061(
                _0x4f9563 - 0x51,
                _0x24a96d - 0x7,
                _0xda84a8 - -0x11e,
                _0x4910ca - 0x155,
                _0x84b70
            );
        }
        function _0x3735e9(
            _0x4f5e72,
            _0x210a8c,
            _0x1bc2b3,
            _0x38d61f,
            _0x24b5c6
        ) {
            return _0x45b061(
                _0x4f5e72 - 0x184,
                _0x210a8c - 0x1e9,
                _0x210a8c - -0x428,
                _0x38d61f - 0x19b,
                _0x4f5e72
            );
        }
        function _0x55b974(
            _0x2595a7,
            _0x4e4ef2,
            _0x199daf,
            _0x4cf396,
            _0x1c095d
        ) {
            return _0x45b061(
                _0x2595a7 - 0x92,
                _0x4e4ef2 - 0x195,
                _0x4cf396 - -0x672,
                _0x4cf396 - 0xcf,
                _0x2595a7
            );
        }
        const _0x4209c9 = {
            JxCSP: function (_0x55f509, _0x4b1038, _0x3a7e83) {
                return _0x55f509(_0x4b1038, _0x3a7e83);
            },
            FtydW: function (_0x1b3033, _0x57625b) {
                return _0x1b3033 - _0x57625b;
            },
            JhAqa: function (_0x4428cf, _0x328ec2) {
                return _0x4428cf < _0x328ec2;
            },
            fUBwQ: function (_0xf8fe29, _0x1f6597) {
                return _0xf8fe29(_0x1f6597);
            },
            RXkvY: function (_0x2840f3, _0x19dfa4) {
                return _0x2840f3 / _0x19dfa4;
            },
            fouMT: function (_0x38ce81, _0x486a27) {
                return _0x38ce81 + _0x486a27;
            },
            KQTAR: function (_0x1ac33d) {
                return _0x1ac33d();
            },
            GmqXn: function (_0x57485c, _0x36e9fb) {
                return _0x57485c - _0x36e9fb;
            },
            diunS: function (_0x1665f2, _0x550b92) {
                return _0x1665f2(_0x550b92);
            },
            Eriqr: function (_0x2be5bd, _0x119f40) {
                return _0x2be5bd(_0x119f40);
            },
            uwSVe: function (_0xa40cc3, _0x5be792) {
                return _0xa40cc3 > _0x5be792;
            },
            Optst: function (_0x48ed44, _0xe43714) {
                return _0x48ed44(_0xe43714);
            },
            qobye: function (_0x4b277f, _0x5e7c44) {
                return _0x4b277f(_0x5e7c44);
            },
        };
        function _0x512c0f(
            _0x500b0a,
            _0x421f23,
            _0x447133,
            _0x1baa32,
            _0x2437ea
        ) {
            return _0x45b061(
                _0x500b0a - 0x16a,
                _0x421f23 - 0x1da,
                _0x500b0a - -0x59b,
                _0x1baa32 - 0xe2,
                _0x1baa32
            );
        }
        const { results: _0xa97e7b, errors: _0x458e23 } = await PromisePool[
            _0x55b974(-0x118, -0xdb, -0xcc, -0xeb, -0xfe) +
                _0x3592bc(-0xf7, -0x10c, -0x104, -0x10a, -0xfd) +
                _0x55b974(-0xf1, -0xdc, -0xc5, -0xd7, -0xe8)
        ](
            this[
                _0x55b974(-0xd4, -0xa6, -0xde, -0xd3, -0xbc) +
                    _0x55b974(-0xbd, -0xcf, -0xe8, -0xe7, -0xd5) +
                    "r"
            ]
        )
            [_0x512c0f(-0x2d, -0x43, 0x5, 0xc, -0x60)](tgHashes)
            [_0x55b974(-0xea, -0xaa, -0x9d, -0xd5, -0xf4) + "ss"](
                async (_0x5846df, _0x4e0092, _0x47f788) => {
                    const _0xe4ba45 = {
                        BDoog: function (_0x503dbf, _0x2ee940, _0x2c1839) {
                            function _0x535dea(
                                _0x170273,
                                _0x369446,
                                _0x209964,
                                _0x4325f2,
                                _0x33a393
                            ) {
                                return _0x2f66(_0x33a393 - -0x2c8, _0x369446);
                            }
                            return _0x4209c9[
                                _0x535dea(-0x100, -0x11d, -0xf0, -0x117, -0xea)
                            ](_0x503dbf, _0x2ee940, _0x2c1839);
                        },
                        zMumO: function (_0x1f760a, _0x14354f) {
                            function _0x4450cb(
                                _0x5c9794,
                                _0x17205f,
                                _0x568dfc,
                                _0x34682a,
                                _0x1815fd
                            ) {
                                return _0x2f66(_0x1815fd - -0x25f, _0x34682a);
                            }
                            return _0x4209c9[
                                _0x4450cb(-0x38, -0x88, -0x55, -0x70, -0x5c)
                            ](_0x1f760a, _0x14354f);
                        },
                        FmFWE: function (_0x5f40d7, _0x230487) {
                            function _0x27fa13(
                                _0x4672a4,
                                _0x34dddb,
                                _0x5e1227,
                                _0x30f9a4,
                                _0x49d234
                            ) {
                                return _0x2f66(_0x34dddb - -0x2d2, _0x5e1227);
                            }
                            return _0x4209c9[
                                _0x27fa13(-0xe5, -0xce, -0x9c, -0xc1, -0x9b)
                            ](_0x5f40d7, _0x230487);
                        },
                        dSwSX: function (_0x24d633, _0x2b5475) {
                            function _0x281ad6(
                                _0x534fa5,
                                _0x25f269,
                                _0x5c5c3f,
                                _0x4b3fb4,
                                _0x2f477d
                            ) {
                                return _0x2f66(_0x534fa5 - 0x387, _0x25f269);
                            }
                            return _0x4209c9[
                                _0x281ad6(0x5ae, 0x5b8, 0x5de, 0x5b1, 0x5aa)
                            ](_0x24d633, _0x2b5475);
                        },
                        xNuPy: function (_0x1f1f2b, _0x38ab1c) {
                            function _0x16837a(
                                _0x3986bd,
                                _0x4ace76,
                                _0x58ebec,
                                _0x24c2a4,
                                _0x58c44b
                            ) {
                                return _0x2f66(_0x58ebec - 0xbc, _0x3986bd);
                            }
                            return _0x4209c9[
                                _0x16837a(0x2ff, 0x2e3, 0x301, 0x328, 0x2d3)
                            ](_0x1f1f2b, _0x38ab1c);
                        },
                        DCCKH: function (_0x4e5b1b, _0x15ccbc) {
                            function _0x1bc011(
                                _0x420785,
                                _0x49d8f6,
                                _0x35977c,
                                _0x1f32cc,
                                _0x55f25c
                            ) {
                                return _0x2f66(_0x49d8f6 - 0x387, _0x420785);
                            }
                            return _0x4209c9[
                                _0x1bc011(0x5e5, 0x5ae, 0x5d2, 0x59f, 0x5a4)
                            ](_0x4e5b1b, _0x15ccbc);
                        },
                        LNcXX: function (_0x59d4cf, _0x5500b0) {
                            function _0x20805f(
                                _0x141346,
                                _0x55140e,
                                _0x5b86a1,
                                _0x520656,
                                _0x1aaf07
                            ) {
                                return _0x2f66(_0x141346 - -0x288, _0x1aaf07);
                            }
                            return _0x4209c9[
                                _0x20805f(-0xab, -0x8f, -0xae, -0xc9, -0xad)
                            ](_0x59d4cf, _0x5500b0);
                        },
                        kekVh: function (_0x501943, _0x18b5f2) {
                            function _0x3f0bdd(
                                _0x37404d,
                                _0x22e3d7,
                                _0x2df493,
                                _0x3f4815,
                                _0x5f2466
                            ) {
                                return _0x2f66(_0x5f2466 - 0xe9, _0x3f4815);
                            }
                            return _0x4209c9[
                                _0x3f0bdd(0x341, 0x33d, 0x32b, 0x2e5, 0x310)
                            ](_0x501943, _0x18b5f2);
                        },
                    };
                    function _0x2e233f(
                        _0x48a196,
                        _0x52061b,
                        _0xe1ae5b,
                        _0x505371,
                        _0x5c66a5
                    ) {
                        return _0x55b974(
                            _0x48a196,
                            _0x52061b - 0x17e,
                            _0xe1ae5b - 0x137,
                            _0x52061b - 0x1f7,
                            _0x5c66a5 - 0x92
                        );
                    }
                    function _0x58774f(
                        _0x1ac9d4,
                        _0x4c6d39,
                        _0x4dee95,
                        _0xf512ec,
                        _0x292488
                    ) {
                        return _0x39ad76(
                            _0x1ac9d4 - 0x134,
                            _0x4c6d39 - 0x10d,
                            _0x4dee95,
                            _0xf512ec - 0xec,
                            _0x292488 - 0x81
                        );
                    }
                    function _0x33d2df(
                        _0x1e431e,
                        _0x73127,
                        _0x4fc1c7,
                        _0x14f8f0,
                        _0x401682
                    ) {
                        return _0x3592bc(
                            _0x1e431e - 0xc5,
                            _0x73127 - 0x2c,
                            _0x4fc1c7 - 0x107,
                            _0x14f8f0 - 0x85,
                            _0x14f8f0
                        );
                    }
                    const _0x119b69 = _0x4209c9[
                        _0x2e233f(0x12b, 0x10d, 0xf7, 0xff, 0xf8)
                    ](extractIdFromTgHash, _0x5846df);
                    function _0x1ac335(
                        _0x2fa8a6,
                        _0x3382e0,
                        _0x538fa5,
                        _0x50a6b7,
                        _0x3738f5
                    ) {
                        return _0x512c0f(
                            _0x2fa8a6 - 0xa8,
                            _0x3382e0 - 0x5c,
                            _0x538fa5 - 0x1b,
                            _0x50a6b7,
                            _0x3738f5 - 0x12d
                        );
                    }
                    function _0x92bc14(
                        _0x8f7f9c,
                        _0x4e457e,
                        _0x1eca45,
                        _0x164798,
                        _0x2cea18
                    ) {
                        return _0x3592bc(
                            _0x1eca45 - 0x3d0,
                            _0x4e457e - 0x9c,
                            _0x1eca45 - 0xf0,
                            _0x164798 - 0x10c,
                            _0x4e457e
                        );
                    }
                    Main[_0x58774f(0x4d4, 0x4f0, 0x4e6, 0x4ee, 0x4e6)](
                        _0x4209c9[_0x2e233f(0x11b, 0x12e, 0x135, 0x105, 0x10c)](
                            getRandomUserAgent
                        )
                    );
                    try {
                        const _0x264071 = await Auth[
                            _0x92bc14(0x2e3, 0x2b7, 0x2bb, 0x2eb, 0x2eb)
                        ](_0x5846df);
                        if (!_0x264071) return;
                        const _0x40ff8a =
                            _0x264071[
                                _0x58774f(0x4bc, 0x49a, 0x4c5, 0x4a4, 0x4bb)
                            ][
                                _0x33d2df(-0x1c, -0x40, -0x39, -0xc, -0x45) +
                                    _0x58774f(
                                        0x4b0,
                                        0x48f,
                                        0x4d8,
                                        0x4bb,
                                        0x4a8
                                    ) +
                                    "n"
                            ];
                        logger[_0x92bc14(0x33c, 0x339, 0x32b, 0x327, 0x312)](
                            "[" +
                                _0x119b69 +
                                (_0x58774f(0x524, 0x51c, 0x4f5, 0x512, 0x4f6) +
                                    _0x2e233f(
                                        0x126,
                                        0x114,
                                        0x100,
                                        0x11c,
                                        0x129
                                    ) +
                                    _0x1ac335(0x97, 0xbf, 0x7d, 0x5e, 0x79) +
                                    _0x1ac335(0x6e, 0x69, 0x63, 0x60, 0x4e))
                        );
                        const _0x41491f = await Auth[
                            _0x1ac335(0xb9, 0xb0, 0xb5, 0x8d, 0xd4)
                        ](_0x40ff8a);
                        if (!_0x41491f) return;
                        if (
                            !_0x41491f[
                                _0x58774f(0x4d2, 0x4d3, 0x4ec, 0x499, 0x4bb)
                            ][
                                _0x33d2df(0x15, -0x20, 0x46, 0x27, -0x6) +
                                    _0x58774f(0x48e, 0x48b, 0x4d2, 0x4b5, 0x4b5)
                            ]
                        ) {
                            logger[
                                _0x92bc14(0x320, 0x2c8, 0x2f4, 0x2de, 0x306)
                            ](
                                "[" +
                                    _0x119b69 +
                                    (_0x92bc14(
                                        0x2eb,
                                        0x2f8,
                                        0x312,
                                        0x31a,
                                        0x328
                                    ) +
                                        _0x33d2df(
                                            0x10,
                                            0x41,
                                            0x21,
                                            0x22,
                                            -0x18
                                        ) +
                                        _0x92bc14(
                                            0x292,
                                            0x2f0,
                                            0x2cb,
                                            0x2ea,
                                            0x2a6
                                        ) +
                                        _0x1ac335(
                                            0x91,
                                            0x9f,
                                            0x8b,
                                            0xa2,
                                            0x59
                                        ) +
                                        _0x1ac335(
                                            0x84,
                                            0x67,
                                            0xa2,
                                            0x7b,
                                            0x5f
                                        ) +
                                        _0x58774f(
                                            0x4eb,
                                            0x47d,
                                            0x4ba,
                                            0x487,
                                            0x4b3
                                        ) +
                                        _0x92bc14(
                                            0x2d1,
                                            0x2e7,
                                            0x2d4,
                                            0x2ab,
                                            0x307
                                        ) +
                                        _0x33d2df(
                                            -0x3,
                                            -0x1c,
                                            0x12,
                                            -0xf,
                                            0x2c
                                        ) +
                                        _0x92bc14(
                                            0x331,
                                            0x353,
                                            0x31d,
                                            0x303,
                                            0x34f
                                        ))
                            );
                            return;
                        }
                        const _0x23ce6c = _0x4209c9[
                            _0x33d2df(-0xe, 0x1d, 0x16, 0x21, 0x1d)
                        ](
                            _0x4209c9[_0x1ac335(0x58, 0x54, 0x2e, 0x86, 0x44)](
                                Number,
                                _0x41491f[
                                    _0x58774f(0x4c8, 0x4bd, 0x4dc, 0x493, 0x4bb)
                                ]?.[
                                    _0x92bc14(
                                        0x2fb,
                                        0x2fb,
                                        0x2f2,
                                        0x2e9,
                                        0x31c
                                    ) + _0x33d2df(0xd, -0x26, 0x26, 0x23, 0x23)
                                ]?.[
                                    _0x58774f(
                                        0x4c4,
                                        0x4e2,
                                        0x4b7,
                                        0x4e5,
                                        0x4c2
                                    ) +
                                        _0x1ac335(
                                            0x75,
                                            0x90,
                                            0x70,
                                            0x5f,
                                            0x80
                                        ) +
                                        _0x92bc14(
                                            0x2cd,
                                            0x2c8,
                                            0x2c0,
                                            0x2b7,
                                            0x2bb
                                        )
                                ]
                            ),
                            _0x4209c9[
                                _0x58774f(0x4a9, 0x4a5, 0x4dc, 0x4db, 0x4dc)
                            ](
                                Number,
                                _0x41491f[
                                    _0x2e233f(0x112, 0xdd, 0xff, 0xb1, 0xaf)
                                ]?.[
                                    _0x58774f(
                                        0x4a1,
                                        0x4c1,
                                        0x4db,
                                        0x4f2,
                                        0x4d6
                                    ) +
                                        _0x92bc14(
                                            0x321,
                                            0x33f,
                                            0x318,
                                            0x2ed,
                                            0x330
                                        )
                                ]?.[
                                    _0x58774f(
                                        0x4e2,
                                        0x4e4,
                                        0x4d5,
                                        0x4c5,
                                        0x4ba
                                    ) +
                                        _0x2e233f(
                                            0xf7,
                                            0x127,
                                            0xf2,
                                            0xf5,
                                            0x158
                                        ) +
                                        _0x92bc14(
                                            0x2e6,
                                            0x2c9,
                                            0x2dd,
                                            0x30d,
                                            0x2e2
                                        ) +
                                        "s"
                                ]
                            )
                        );
                        if (
                            _0x4209c9[
                                _0x33d2df(-0x29, -0x19, 0x0, -0x27, -0x2e)
                            ](_0x23ce6c, 0x1 * -0xd9a + 0xe50 + -0xb6)
                        )
                            logger[_0x33d2df(0x20, 0x2, 0x39, 0x31, 0x39)](
                                "[" +
                                    _0x119b69 +
                                    (_0x33d2df(0x0, 0x8, -0xd, 0x27, -0x26) +
                                        _0x1ac335(
                                            0xad,
                                            0xb5,
                                            0x88,
                                            0xae,
                                            0x83
                                        ) +
                                        "\x20(") +
                                    _0x23ce6c +
                                    (_0x58774f(
                                        0x4ab,
                                        0x4e8,
                                        0x4ee,
                                        0x4bc,
                                        0x4d2
                                    ) +
                                        _0x2e233f(
                                            0xb8,
                                            0xc2,
                                            0x8c,
                                            0x96,
                                            0xaf
                                        ) +
                                        _0x1ac335(0x76, 0xa8, 0x93, 0x71, 0x41))
                            );
                        else {
                            logger[
                                _0x92bc14(0x30d, 0x303, 0x2f4, 0x305, 0x2cb)
                            ](
                                "[" +
                                    _0x119b69 +
                                    (_0x33d2df(0x0, -0x1b, 0x36, -0x8, 0x7) +
                                        _0x2e233f(
                                            0x14a,
                                            0x125,
                                            0x14c,
                                            0x12a,
                                            0x122
                                        ) +
                                        "\x20(") +
                                    _0x23ce6c +
                                    (_0x92bc14(
                                        0x2e7,
                                        0x2dd,
                                        0x2ee,
                                        0x2ea,
                                        0x314
                                    ) +
                                        _0x2e233f(
                                            0x98,
                                            0xc2,
                                            0x9c,
                                            0xcc,
                                            0xa4
                                        ) +
                                        _0x58774f(
                                            0x53d,
                                            0x4f9,
                                            0x4f9,
                                            0x544,
                                            0x50e
                                        ) +
                                        _0x58774f(
                                            0x4a8,
                                            0x49f,
                                            0x4b6,
                                            0x4d0,
                                            0x4d7
                                        ) +
                                        _0x33d2df(
                                            0x4,
                                            0x3a,
                                            -0x25,
                                            0x18,
                                            -0x15
                                        ) +
                                        _0x33d2df(
                                            0x9,
                                            -0x7,
                                            0x15,
                                            -0x19,
                                            -0x1f
                                        ) +
                                        "ed")
                            );
                            return;
                        }
                        await _0x4209c9[
                            _0x33d2df(-0x41, -0x15, -0x72, -0x62, -0x47)
                        ](setDelay, 0x743 + 0x1 * -0x1508 + -0x1 * -0xdc7);
                        const _0x3ca5c8 = new Array(_0x23ce6c);
                        let _0x10c0e9 =
                            -0x9a8 * 0x1 + -0x641 * 0x1 + -0x1 * -0xfe9;
                        const { results: _0x271403, errors: _0x50b76d } =
                            await PromisePool[
                                _0x2e233f(0xdc, 0x10c, 0x130, 0x13a, 0xdb) +
                                    _0x2e233f(0x117, 0xdf, 0xaa, 0xe2, 0xc2) +
                                    _0x2e233f(0x150, 0x120, 0x12d, 0x152, 0xfb)
                            ](
                                app[
                                    _0x2e233f(
                                        0x13c,
                                        0x10b,
                                        0x13c,
                                        0x134,
                                        0x131
                                    ) +
                                        _0x2e233f(
                                            0x146,
                                            0x116,
                                            0xff,
                                            0x10e,
                                            0x12d
                                        )
                                ]
                                    ? 0x2 * 0xffd + 0x97b + -0x2972
                                    : -0x2085 + -0xbbc + 0x2c42
                            )
                                [_0x33d2df(-0x1e, 0x14, 0x2, 0x13, -0xa)](
                                    _0x3ca5c8
                                )
                                [
                                    _0x33d2df(0x11, -0x17, 0x40, -0x2, 0x40) +
                                        "ss"
                                ](async (_0x4b7c85, _0x29c1fd, _0x2a1aba) => {
                                    const _0x1b16d6 = await Game[
                                        _0x263754(
                                            0x45c,
                                            0x47d,
                                            0x478,
                                            0x489,
                                            0x467
                                        ) +
                                            _0x263754(
                                                0x466,
                                                0x47f,
                                                0x4a0,
                                                0x4a5,
                                                0x472
                                            )
                                    ](_0x40ff8a);
                                    if (!_0x1b16d6) return;
                                    logger[
                                        _0x1b28c7(
                                            0x3e9,
                                            0x407,
                                            0x3fe,
                                            0x420,
                                            0x3f3
                                        )
                                    ](
                                        "[" +
                                            _0x119b69 +
                                            (_0x17bed6(
                                                0x46f,
                                                0x44b,
                                                0x42f,
                                                0x43d,
                                                0x429
                                            ) +
                                                _0x17bed6(
                                                    0x453,
                                                    0x443,
                                                    0x419,
                                                    0x44f,
                                                    0x43a
                                                )) +
                                            _0x1b16d6[
                                                _0x1b28c7(
                                                    0x395,
                                                    0x39d,
                                                    0x36c,
                                                    0x35c,
                                                    0x36a
                                                )
                                            ][
                                                _0x3c696f(
                                                    0x7,
                                                    -0x12,
                                                    -0x19,
                                                    -0xd,
                                                    -0x23
                                                ) + "ag"
                                            ] +
                                            (_0x263754(
                                                0x480,
                                                0x45d,
                                                0x442,
                                                0x458,
                                                0x463
                                            ) +
                                                _0x17bed6(
                                                    0x406,
                                                    0x3f8,
                                                    0x3e5,
                                                    0x418,
                                                    0x408
                                                ) +
                                                _0x17bed6(
                                                    0x485,
                                                    0x45d,
                                                    0x443,
                                                    0x48d,
                                                    0x447
                                                ) +
                                                _0x17bed6(
                                                    0x435,
                                                    0x427,
                                                    0x403,
                                                    0x43d,
                                                    0x3fb
                                                ) +
                                                _0x3f6a09(
                                                    0x22c,
                                                    0x224,
                                                    0x206,
                                                    0x1fe,
                                                    0x1f9
                                                )) +
                                            (app[
                                                _0x1b28c7(
                                                    0x3c3,
                                                    0x3cf,
                                                    0x3bc,
                                                    0x3a2,
                                                    0x39a
                                                ) +
                                                    _0x263754(
                                                        0x46d,
                                                        0x4ac,
                                                        0x4b5,
                                                        0x45a,
                                                        0x487
                                                    )
                                            ]
                                                ? -0xabc + 0xa9 * 0xd + 0x229
                                                : -0x26c7 +
                                                  0x5ff +
                                                  0xb * 0x2ff) +
                                            (_0x3f6a09(
                                                0x23d,
                                                0x229,
                                                0x1f9,
                                                0x1e9,
                                                0x208
                                            ) +
                                                _0x3f6a09(
                                                    0x1d5,
                                                    0x1df,
                                                    0x226,
                                                    0x1e9,
                                                    0x1f2
                                                ))
                                    );
                                    const _0x990740 =
                                            Date[
                                                _0x3c696f(
                                                    -0xd,
                                                    0x16,
                                                    -0x1a,
                                                    -0x11,
                                                    -0x1d
                                                )
                                            ](),
                                        _0x2a45d1 = await _0xe4ba45[
                                            _0x3f6a09(
                                                0x201,
                                                0x218,
                                                0x1cd,
                                                0x1ed,
                                                0x1ec
                                            )
                                        ](
                                            generateData,
                                            _0x1b16d6,
                                            app[
                                                _0x3c696f(
                                                    0x2b,
                                                    0x1c,
                                                    0x4b,
                                                    0x3d,
                                                    -0x2
                                                ) +
                                                    _0x17bed6(
                                                        0x47f,
                                                        0x446,
                                                        0x429,
                                                        0x450,
                                                        0x471
                                                    )
                                            ]
                                        ),
                                        _0x4e7bdb =
                                            Date[
                                                _0x1b28c7(
                                                    0x38b,
                                                    0x368,
                                                    0x3b5,
                                                    0x37b,
                                                    0x388
                                                )
                                            ]();
                                    function _0x1b28c7(
                                        _0x2530f2,
                                        _0x155e35,
                                        _0x10d996,
                                        _0x27f32d,
                                        _0xc2cd67
                                    ) {
                                        return _0x2e233f(
                                            _0x27f32d,
                                            _0x2530f2 - 0x2b8,
                                            _0x10d996 - 0x7d,
                                            _0x27f32d - 0x1a0,
                                            _0xc2cd67 - 0xdf
                                        );
                                    }
                                    if (
                                        !app[
                                            _0x3c696f(
                                                0x2b,
                                                0xb,
                                                0x13,
                                                0x35,
                                                0x36
                                            ) +
                                                _0x263754(
                                                    0x452,
                                                    0x482,
                                                    0x46f,
                                                    0x45c,
                                                    0x487
                                                )
                                        ]
                                    ) {
                                        const _0x432156 = _0xe4ba45[
                                            _0x3c696f(
                                                0x10,
                                                0x24,
                                                0x2f,
                                                0x3f,
                                                -0x2
                                            )
                                        ](_0x4e7bdb, _0x990740);
                                        if (
                                            _0xe4ba45[
                                                _0x263754(
                                                    0x459,
                                                    0x426,
                                                    0x43a,
                                                    0x438,
                                                    0x44a
                                                )
                                            ](
                                                _0x432156,
                                                -0x10f * 0x8 +
                                                    -0x9ced +
                                                    -0x1 * -0x1552d
                                            )
                                        ) {
                                            const _0x5ffdcd = _0xe4ba45[
                                                _0x3c696f(
                                                    0x10,
                                                    0x19,
                                                    0x37,
                                                    0x30,
                                                    -0x6
                                                )
                                            ](
                                                -0xf32c + -0x15302 + 0x2f5f6,
                                                _0x432156
                                            );
                                            await _0xe4ba45[
                                                _0x3c696f(
                                                    0x2,
                                                    0x3,
                                                    0x14,
                                                    0x2e,
                                                    -0x15
                                                )
                                            ](
                                                setDelay,
                                                _0xe4ba45[
                                                    _0x263754(
                                                        0x4a0,
                                                        0x470,
                                                        0x44d,
                                                        0x479,
                                                        0x471
                                                    )
                                                ](
                                                    _0x5ffdcd,
                                                    -0x9f1 +
                                                        -0x24cb * -0x1 +
                                                        -0x16f2 * 0x1
                                                )
                                            );
                                        }
                                    } else
                                        await _0xe4ba45[
                                            _0x3f6a09(
                                                0x1d6,
                                                0x22f,
                                                0x1d5,
                                                0x21d,
                                                0x207
                                            )
                                        ](
                                            setDelay,
                                            -0x7a1 + -0x25a6 + 0x1 * 0x2d49
                                        );
                                    function _0x3c696f(
                                        _0x576b32,
                                        _0x21effc,
                                        _0x5509a6,
                                        _0xaf2291,
                                        _0x341c79
                                    ) {
                                        return _0x2e233f(
                                            _0x5509a6,
                                            _0x576b32 - -0xe0,
                                            _0x5509a6 - 0x1dc,
                                            _0xaf2291 - 0x1f3,
                                            _0x341c79 - 0xab
                                        );
                                    }
                                    const _0xafb592 = await Game[
                                        _0x17bed6(
                                            0x426,
                                            0x458,
                                            0x484,
                                            0x481,
                                            0x470
                                        ) +
                                            _0x17bed6(
                                                0x461,
                                                0x459,
                                                0x468,
                                                0x448,
                                                0x452
                                            )
                                    ](
                                        app[
                                            _0x17bed6(
                                                0x468,
                                                0x44c,
                                                0x42c,
                                                0x480,
                                                0x424
                                            )
                                        ],
                                        _0x2a45d1[
                                            _0x263754(
                                                0x427,
                                                0x420,
                                                0x466,
                                                0x454,
                                                0x44e
                                            )
                                        ],
                                        _0x2a45d1[
                                            _0x3f6a09(
                                                0x22b,
                                                0x222,
                                                0x1f1,
                                                0x218,
                                                0x20e
                                            ) + "ag"
                                        ]
                                    );
                                    function _0x17bed6(
                                        _0x671f18,
                                        _0x504ed4,
                                        _0x4c5d2d,
                                        _0x524f38,
                                        _0x7e1361
                                    ) {
                                        return _0x58774f(
                                            _0x671f18 - 0x149,
                                            _0x504ed4 - 0x3f,
                                            _0x4c5d2d,
                                            _0x524f38 - 0x1dc,
                                            _0x504ed4 - -0xae
                                        );
                                    }
                                    if (!_0xafb592) return;
                                    const _0x4fe4a4 = await Game[
                                        _0x3f6a09(
                                            0x1f9,
                                            0x1db,
                                            0x210,
                                            0x1c4,
                                            0x1f6
                                        ) +
                                            _0x3f6a09(
                                                0x20f,
                                                0x1fe,
                                                0x1fa,
                                                0x213,
                                                0x213
                                            ) +
                                            "me"
                                    ](
                                        _0x40ff8a,
                                        _0xafb592[
                                            _0x3c696f(
                                                -0x8,
                                                -0x40,
                                                0xe,
                                                -0x33,
                                                0x28
                                            ) + "ad"
                                        ],
                                        _0x2a45d1[
                                            _0x1b28c7(
                                                0x384,
                                                0x388,
                                                0x358,
                                                0x3a4,
                                                0x34e
                                            )
                                        ]
                                    );
                                    if (!_0x4fe4a4) return;
                                    function _0x3f6a09(
                                        _0x372a98,
                                        _0x780903,
                                        _0xdd9ec0,
                                        _0x494fbe,
                                        _0xbe2f96
                                    ) {
                                        return _0x1ac335(
                                            _0xbe2f96 - 0x19f,
                                            _0x780903 - 0x1e,
                                            _0xdd9ec0 - 0x44,
                                            _0x372a98,
                                            _0xbe2f96 - 0x1b5
                                        );
                                    }
                                    logger[
                                        _0x3c696f(0x51, 0x70, 0x2e, 0x46, 0x2a)
                                    ](
                                        "[" +
                                            _0x119b69 +
                                            (_0x263754(
                                                0x4a8,
                                                0x49f,
                                                0x4aa,
                                                0x464,
                                                0x48c
                                            ) +
                                                _0x263754(
                                                    0x48c,
                                                    0x46f,
                                                    0x457,
                                                    0x45c,
                                                    0x484
                                                )) +
                                            _0x1b16d6[
                                                _0x1b28c7(
                                                    0x395,
                                                    0x3a8,
                                                    0x3a4,
                                                    0x3aa,
                                                    0x3b1
                                                )
                                            ][
                                                _0x3c696f(
                                                    0x7,
                                                    -0x1,
                                                    0x1a,
                                                    -0x1e,
                                                    -0x12
                                                ) + "ag"
                                            ] +
                                            (_0x3c696f(
                                                0x1b,
                                                0x15,
                                                0x52,
                                                0x36,
                                                0x24
                                            ) +
                                                _0x3f6a09(
                                                    0x229,
                                                    0x246,
                                                    0x222,
                                                    0x254,
                                                    0x231
                                                ) +
                                                "\x20+") +
                                            _0x2a45d1[
                                                _0x3f6a09(
                                                    0x200,
                                                    0x204,
                                                    0x214,
                                                    0x221,
                                                    0x1f3
                                                )
                                            ] +
                                            (_0x263754(
                                                0x467,
                                                0x469,
                                                0x47f,
                                                0x462,
                                                0x447
                                            ) +
                                                "[") +
                                            _0xe4ba45[
                                                _0x17bed6(
                                                    0x3fd,
                                                    0x404,
                                                    0x3f4,
                                                    0x431,
                                                    0x3e8
                                                )
                                            ](
                                                _0x29c1fd,
                                                -0x21b * -0x7 +
                                                    0x280 +
                                                    0x44f * -0x4
                                            ) +
                                            "/" +
                                            _0x23ce6c +
                                            "]"
                                    );
                                    function _0x263754(
                                        _0x56cd78,
                                        _0x2cb768,
                                        _0x369967,
                                        _0x5c5ef2,
                                        _0x30759a
                                    ) {
                                        return _0x2e233f(
                                            _0x2cb768,
                                            _0x30759a - 0x371,
                                            _0x369967 - 0x77,
                                            _0x5c5ef2 - 0x120,
                                            _0x30759a - 0x1b4
                                        );
                                    }
                                    await _0xe4ba45[
                                        _0x17bed6(
                                            0x443,
                                            0x41b,
                                            0x402,
                                            0x428,
                                            0x415
                                        )
                                    ](
                                        setDelay,
                                        -0x12d7 + -0x43 * -0x5c + -0x538
                                    );
                                });
                        await _0x4209c9[
                            _0x1ac335(0xb2, 0x8a, 0xc7, 0xe8, 0xd2)
                        ](
                            setDelay,
                            -0x7 * -0x573 + -0x1 * 0xe8f + -0x1 * 0x1795
                        );
                    } catch (_0x499012) {
                        await _0x4209c9[
                            _0x2e233f(0x148, 0x11d, 0x13e, 0xee, 0xed)
                        ](setDelay, -0x1fbb + 0x11ab + -0x1 * -0xe13),
                            logger[
                                _0x58774f(0x4c6, 0x4aa, 0x4c9, 0x50c, 0x4e2)
                            ](
                                "[" +
                                    _0x119b69 +
                                    "]\x20" +
                                    (_0x499012[
                                        _0x92bc14(
                                            0x2c6,
                                            0x2ba,
                                            0x2c3,
                                            0x2c0,
                                            0x295
                                        ) + "ge"
                                    ]
                                        ? _0x499012[
                                              _0x58774f(
                                                  0x4c1,
                                                  0x483,
                                                  0x492,
                                                  0x492,
                                                  0x4a7
                                              ) + "ge"
                                          ]
                                        : _0x499012)
                            );
                    }
                }
            );
    }
    async [_0x45b061(0x5c3, 0x5bb, 0x594, 0x573, 0x596) +
        _0x5a7d9f(0x1c5, 0x1be, 0x181, 0x1a8, 0x19d)]() {
        function _0x572988(
            _0x4b2be7,
            _0x52d945,
            _0x3d7e02,
            _0x5485d4,
            _0x399a05
        ) {
            return _0x45b061(
                _0x4b2be7 - 0xb5,
                _0x52d945 - 0x170,
                _0x52d945 - 0x50,
                _0x5485d4 - 0x109,
                _0x3d7e02
            );
        }
        function _0x12ad1f(
            _0x5ddc13,
            _0x498eb7,
            _0x5b05a5,
            _0x5660cf,
            _0x43147d
        ) {
            return _0x4d3c3c(
                _0x498eb7 - 0x29e,
                _0x5b05a5,
                _0x5b05a5 - 0xd5,
                _0x5660cf - 0xfa,
                _0x43147d - 0xc6
            );
        }
        const _0x448a93 = {};
        _0x448a93[_0x572988(0x5c0, 0x5a6, 0x57f, 0x5d0, 0x57e)] =
            _0x572988(0x5d0, 0x5b0, 0x5b1, 0x599, 0x57e) +
            _0x572988(0x5c8, 0x5d1, 0x5a4, 0x5b7, 0x5ac) +
            "*";
        function _0x4c52b6(
            _0x3bf417,
            _0x5b3e01,
            _0x314fe3,
            _0x4daa31,
            _0x4623cc
        ) {
            return _0x5a7d9f(
                _0x3bf417 - 0x17d,
                _0x5b3e01 - 0x48,
                _0x3bf417,
                _0x314fe3 - 0x24c,
                _0x4623cc - 0x177
            );
        }
        const _0x50f072 = _0x448a93;
        function _0x3eaab1(
            _0x1bf0e5,
            _0xe5b1c2,
            _0x5e44ac,
            _0x9a87d0,
            _0x43f12c
        ) {
            return _0x5a7d9f(
                _0x1bf0e5 - 0x15e,
                _0xe5b1c2 - 0xa2,
                _0x5e44ac,
                _0x1bf0e5 - -0x1f4,
                _0x43f12c - 0x3b
            );
        }
        await game[_0x572988(0x5b3, 0x5a9, 0x577, 0x5aa, 0x5d0)]();
        function _0x2ed373(
            _0x3b6658,
            _0x20761a,
            _0x356722,
            _0x369510,
            _0x2c87fc
        ) {
            return _0x5a7d9f(
                _0x3b6658 - 0x107,
                _0x20761a - 0x1e3,
                _0x20761a,
                _0x356722 - 0x35c,
                _0x2c87fc - 0x27
            );
        }
        const _0xd10610 = schedule[
            _0x3eaab1(0x6, 0x2f, -0x2a, 0x1e, -0x9) +
                _0x572988(0x60c, 0x5fa, 0x5f2, 0x60c, 0x613) +
                "b"
        ](
            _0x50f072[_0x2ed373(0x51b, 0x50e, 0x518, 0x4f1, 0x53e)],
            async function () {
                function _0x2afec0(
                    _0x108dca,
                    _0x1e973e,
                    _0x2d6938,
                    _0x21ef52,
                    _0x561c15
                ) {
                    return _0x12ad1f(
                        _0x108dca - 0x102,
                        _0x561c15 - -0x394,
                        _0x1e973e,
                        _0x21ef52 - 0x181,
                        _0x561c15 - 0x1cc
                    );
                }
                await game[_0x2afec0(-0x1d6, -0x1fe, -0x1c2, -0x205, -0x1cd)]();
            }
        );
    }
}

const game = new gameController();

export default game;

/* -------------------------------------------------------------
   PIXEL RUNNER: DELUXE EDITION - GAME LOGIC
   ------------------------------------------------------------- */

// 1. SPRITE DATA AND PALETTE
const PALETTE = {
    ' ': null, 
    'b': '#1E2022', // Dark outline
    'w': '#FFFFFF', // White
    'p': '#FFB7B2', // Soft pink
    'o': '#FF7F0E', // Vibrant orange
    'c': '#FFDAC1', // Peach skin
    'g': '#2EC4B6', // Turquoise green
    'd': '#A0522D', // Sienna brown
    'm': '#4A2810', // Dark brown
    'r': '#FF1654', // Neon red
    'y': '#FFD166', // Golden yellow
    'u': '#00F0FF', // Cyan shield glow
    'v': '#9B5DE5'  // Retro purple
};

const SPRITE_DATA = {
    bunny: {
        f1: [
            "                ",
            "   bb      bb   ",
            "   bpb    bpb   ",
            "   bwb    bwb   ",
            "   bwwbbbbwwb   ",
            "   bwwwwwwwwb   ",
            "  bwwbwwbwwwwbb ",
            " bbwwwwwwwwwwwb ",
            " bwwwwwwwwwwwwb ",
            "  bbbbbbbbbbwwb ",
            "   bwwb  bwwb   ",
            "   bwwb  bwwb   ",
            "   bbbb  bbbb   ",
            "                "
        ],
        f2: [
            "                ",
            "   bb      bb   ",
            "   bpb    bpb   ",
            "   bwb    bwb   ",
            "   bwwbbbbwwb   ",
            "   bwwwwwwwwb   ",
            "  bwwbwwbwwwwbb ",
            " bbwwwwwwwwwwwb ",
            " bwwwwwwwwwwwwb ",
            "  bbbbbbbbbbwwb ",
            "    bwwbbwwb    ",
            "    bwwbbwwb    ",
            "    bbbbbbbb    ",
            "                "
        ],
        duck: [
            "                ",
            "                ",
            "                ",
            "                ",
            "   bb      bb   ",
            "  bpwb    bpwb  ",
            "  bwwbbbbbbwwb  ",
            "  bwwwwwwwwwwb  ",
            " bbwbwwbwwwwwwb ",
            " bwwwwwwwwwwwwb ",
            "  bbbbbbbbbbwwb ",
            "   bwwb  bwwb   ",
            "   bbbb  bbbb   ",
            "                "
        ]
    },
    fox: {
        f1: [
            "                ",
            "   bb      bb   ",
            "  bobb    bobb  ",
            "  boob    boob  ",
            "  booobbbbooob  ",
            "  booooooooocb  ",
            "  bocbooboooobb ",
            " bbooooooooooob ",
            " boooooccccooob ",
            "  bbbbbbbbbbccb ",
            "   boob  boob   ",
            "   boob  boob   ",
            "   bbbb  bbbb   ",
            "                "
        ],
        f2: [
            "                ",
            "   bb      bb   ",
            "  bobb    bobb  ",
            "  boob    boob  ",
            "  booobbbbooob  ",
            "  booooooooocb  ",
            "  bocbooboooobb ",
            " bbooooooooooob ",
            " boooooccccooob ",
            "  bbbbbbbbbbccb ",
            "    boobboob    ",
            "    boobboob    ",
            "    bbbbbbbb    ",
            "                "
        ],
        duck: [
            "                ",
            "                ",
            "                ",
            "                ",
            "   bb      bb   ",
            "  boob    boob  ",
            "  booobbbbooob  ",
            "  booooooooocb  ",
            " bbocboobooooob ",
            " boooooccccooob ",
            "  bbbbbbbbbbccb ",
            "   boob  boob   ",
            "   bbbb  bbbb   ",
            "                "
        ]
    },
    cat: {
        f1: [
            "                ",
            "                ",
            "   bb      bb   ",
            "  bcob    bcob  ",
            "  bcocbbbbcobb  ",
            "  bccccccccccb  ",
            "  bccbccbccccbb ",
            " bbccccccccccob ",
            " bocccccccccoob ",
            "  bbbbbbbbbboob ",
            "   bccb  bccb   ",
            "   bccb  bccb   ",
            "   bbbb  bbbb   ",
            "                "
        ],
        f2: [
            "                ",
            "                ",
            "   bb      bb   ",
            "  bcob    bcob  ",
            "  bcocbbbbcobb  ",
            "  bccccccccccb  ",
            "  bccbccbccccbb ",
            " bbccccccccccob ",
            " bocccccccccoob ",
            "  bbbbbbbbbboob ",
            "    bccbbccb    ",
            "    bccbbccb    ",
            "    bbbbbbbb    ",
            "                "
        ],
        duck: [
            "                ",
            "                ",
            "                ",
            "                ",
            "                ",
            "   bb      bb   ",
            "  bcocbbbbcobb  ",
            "  bccccccccccb  ",
            " bbccbccbcccccb ",
            " bocccccccccoob ",
            "  bbbbbbbbbboob ",
            "   bccb  bccb   ",
            "   bbbb  bbbb   ",
            "                "
        ]
    },
    bear: {
        f1: [
            "                ",
            "                ",
            "  bbbb    bbbb  ",
            " bdmmbd  bdmmbd ",
            " bdmmddbbddmmdb ",
            " bddddddddddddb ",
            " bddbddbdddddbb ",
            " bbdddddddddddb ",
            " bddddddddddddb ",
            "  bbbbbbbbbbddb ",
            "   bddb  bddb   ",
            "   bddb  bddb   ",
            "   bbbb  bbbb   ",
            "                "
        ],
        f2: [
            "                ",
            "                ",
            "  bbbb    bbbb  ",
            " bdmmbd  bdmmbd ",
            " bdmmddbbddmmdb ",
            " bddddddddddddb ",
            " bddbddbdddddbb ",
            " bbdddddddddddb ",
            " bddddddddddddb ",
            "  bbbbbbbbbbddb ",
            "    bddbbddb    ",
            "    bddbbddb    ",
            "    bbbbbbbb    ",
            "                "
        ],
        duck: [
            "                ",
            "                ",
            "                ",
            "                ",
            "  bbbb    bbbb  ",
            " bdmmddbbddmmdb ",
            " bddddddddddddb ",
            " bbddbddbdddddb ",
            " bddddddddddddb ",
            "  bbbbbbbbbbddb ",
            "   bddb  bddb   ",
            "   bbbb  bbbb   ",
            "                "
        ]
    },
    env: {
        tree: [
            "     gg     ",
            "    gggg    ",
            "   gggggg   ",
            "  gggggggg  ",
            "  gggggggg  ",
            " gggggggggg ",
            "  gggggggg  ",
            "    dddd    ",
            "    dddd    ",
            "    dddd    ",
            "    dddd    ",
            "    dddd    "
        ],
        tree2: [
            "   gggggg   ",
            "  gggggggg  ",
            " gggggggggg ",
            " gggggggggg ",
            "  gggggggg  ",
            "   gggggg   ",
            "    dddd    ",
            "    dddd    ",
            "    dddd    ",
            "    dddd    "
        ],
        carrot: [
            "       gg  ",
            "      gg   ",
            "     gg    ",
            " oo ogg    ",
            " oooooo    ",
            "  ooooo    ",
            "   oooo    ",
            "    ooo    ",
            "     oo    ",
            "      o    "
        ],
        goldenCarrot: [
            "       gg  ",
            "      gg   ",
            "     gg    ",
            " yy ygg    ",
            " yyyyyy    ",
            "  yyyyy    ",
            "   yyyy    ",
            "    yyy    ",
            "     yy    ",
            "      y    "
        ],
        shieldPowerup: [
            "    uuuu    ",
            "  uuuuuuuu  ",
            " uuuuuuuuuu ",
            " uuuwuuwuuu ",
            " uuuuuuuuuu ",
            " uuuwuuwuuu ",
            " uuuuuuuuuu ",
            "  uuuuuuuu  ",
            "    uuuu    "
        ],
        bird1: [
            "        r      ",
            "       rrr     ",
            "      rrrrr    ",
            "   rrrrrrrrr   ",
            " rrrrrrrrrrrr  ",
            "    rrrrrrrrb y",
            "     rrr  rrr  "
        ],
        bird2: [
            "               ",
            "               ",
            "   rrrrrrrrr   ",
            " rrrrrrrrrrrr  ",
            "    rrrrrrrrb y",
            "     rrrrrrr   ",
            "      rrrr     ",
            "       rr      "
        ]
    }
};

// 2. CHARACTER STATS DEFINITION
const CHAR_STATS = {
    bunny: {
        name: "BUNNY",
        ability: "Double Jump Enabled",
        maxLives: 1,
        speed: 1.0,
        jumpForce: 15.5,
        gravity: 0.65,
        hover: false,
        doubleJump: true,
        bars: { speed: 50, jump: 75, weight: 45 }
    },
    fox: {
        name: "FOX",
        ability: "Super Speed Sprint",
        maxLives: 1,
        speed: 1.3,
        jumpForce: 13.8,
        gravity: 0.62,
        hover: false,
        doubleJump: false,
        bars: { speed: 95, jump: 55, weight: 40 }
    },
    cat: {
        name: "CAT",
        ability: "Floaty Jump & Glide",
        maxLives: 1,
        speed: 1.08,
        jumpForce: 11.5,
        gravity: 0.40,
        hover: true,
        doubleJump: true,
        bars: { speed: 65, jump: 85, weight: 20 }
    },
    bear: {
        name: "BEAR",
        ability: "Starts with 2 Hearts",
        maxLives: 2,
        speed: 0.88,
        jumpForce: 17.5,
        gravity: 0.88,
        hover: false,
        doubleJump: false,
        bars: { speed: 35, jump: 65, weight: 90 }
    }
};

// 3. SOUND SYNTHESIZER (Web Audio API)
class RetroAudioEngine {
    constructor() {
        this.ctx = null;
        this.sfxMuted = false;
        this.bgmMuted = true; // BGM starts muted by default for clean UX
        this.bgmTimer = null;
        
        // Sequencer BGM state
        this.tempo = 120; // Beats per minute
        this.currentBeat = 0;
        this.nextNoteTime = 0.0;
        this.schedulerInterval = 25; // ms
        this.isPlayingBGM = false;
        
        // Catchy Retro BGM Loop (Note values & frequencies)
        // Progression: C - Am - F - G
        this.bassMelody = [
            130.81, 130.81, 196.00, 130.81, // C3, C3, G3, C3
            110.00, 110.00, 164.81, 110.00, // A2, A2, E3, A2
            87.31,  87.31,  130.81, 87.31,  // F2, F2, C3, F2
            98.00,  98.00,  146.83, 98.00   // G2, G2, D3, G2
        ];
        
        this.leadMelody = [
            261.63, 0,      329.63, 392.00, // C4, _, E4, G4
            220.00, 0,      261.63, 329.63, // A3, _, C4, E4
            349.23, 0,      440.00, 523.25, // F4, _, A4, C5
            392.00, 493.88, 587.33, 783.99  // G4, B4, D5, G5
        ];
    }

    init() {
        if (this.ctx) return;
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContextClass();
    }

    setSFXMute(muted) {
        this.sfxMuted = muted;
        if (!muted) this.init();
    }

    setBGMMute(muted) {
        this.bgmMuted = muted;
        if (!muted) {
            this.init();
            this.startBGM();
        } else {
            this.stopBGM();
        }
    }

    // Play retro SFX using synthesizers
    playJump() {
        if (this.sfxMuted) return;
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(700, now + 0.14);
        
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
        
        osc.start(now);
        osc.stop(now + 0.15);
    }

    playDuck() {
        if (this.sfxMuted) return;
        this.init();

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.linearRampToValueAtTime(120, now + 0.12);
        
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        
        osc.start(now);
        osc.stop(now + 0.13);
    }

    playCarrot() {
        if (this.sfxMuted) return;
        this.init();

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.type = 'sine';
        
        // Clean double-note sound (arpeggio)
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.06); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.12); // G5
        
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        
        osc.start(now);
        osc.stop(now + 0.26);
    }

    playPowerup() {
        if (this.sfxMuted) return;
        this.init();

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.type = 'triangle';
        
        // Fast rising bubbly arpeggio
        for(let i = 0; i < 5; i++) {
            osc.frequency.setValueAtTime(400 + (i * 150), now + (i * 0.04));
        }
        
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        
        osc.start(now);
        osc.stop(now + 0.26);
    }

    playShieldBreak() {
        if (this.sfxMuted) return;
        this.init();

        const now = this.ctx.currentTime;
        // Synthesize glass shattering noise
        const bufferSize = this.ctx.sampleRate * 0.35;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.value = 1800;

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        noise.start(now);
        noise.stop(now + 0.36);
    }

    playCrash() {
        if (this.sfxMuted) return;
        this.init();

        const now = this.ctx.currentTime;
        // White noise explosion
        const bufferSize = this.ctx.sampleRate * 0.5;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1000, now);
        filter.frequency.linearRampToValueAtTime(100, now + 0.5);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        noise.start(now);
        noise.stop(now + 0.51);
    }

    // Procedural Sequence Scheduler
    startBGM() {
        if (this.isPlayingBGM || this.bgmMuted) return;
        this.isPlayingBGM = true;
        this.nextNoteTime = this.ctx.currentTime;
        this.schedulerLoop();
    }

    stopBGM() {
        this.isPlayingBGM = false;
        clearTimeout(this.bgmTimer);
    }

    schedulerLoop() {
        if (!this.isPlayingBGM) return;
        
        while (this.nextNoteTime < this.ctx.currentTime + 0.1) {
            this.scheduleNote(this.currentBeat, this.nextNoteTime);
            
            // Advance timeline
            const secondsPerBeat = 60.0 / this.tempo / 2; // Eighth notes
            this.nextNoteTime += secondsPerBeat;
            this.currentBeat = (this.currentBeat + 1) % 16;
        }
        
        this.bgmTimer = setTimeout(() => this.schedulerLoop(), this.schedulerInterval);
    }

    scheduleNote(step, time) {
        if (!this.isPlayingBGM || this.bgmMuted) return;

        // BASS SYNTH (Square Wave)
        const bassFreq = this.bassMelody[step];
        if (bassFreq > 0) {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.type = 'square';
            osc.frequency.setValueAtTime(bassFreq, time);
            
            gain.gain.setValueAtTime(0.015, time); // Low volume background hum
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);
            
            osc.start(time);
            osc.stop(time + 0.23);
        }

        // LEAD SYNTH (Pulse-like Triangle Wave)
        const leadFreq = this.leadMelody[step];
        if (leadFreq > 0 && step % 2 === 0) { // Play lead on select beats
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(leadFreq, time);
            
            gain.gain.setValueAtTime(0.012, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.18);
            
            osc.start(time);
            osc.stop(time + 0.2);
        }
    }
}

const AudioEngine = new RetroAudioEngine();

// 4. GAME ENGINE CONFIGURATION
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d', { alpha: false });

let PIXEL = window.innerWidth < 800 ? 3 : 4; 
const ASSETS = {};

// Procedural texture drawing to cached offscreen canvases
function preRenderSprite(data, scale = PIXEL) {
    const temp = document.createElement('canvas');
    temp.width = data[0].length * scale;
    temp.height = data.length * scale;
    temp.originalWidth = temp.width;
    temp.originalHeight = temp.height;
    const tCtx = temp.getContext('2d');
    
    // Disable anti-aliasing
    tCtx.imageSmoothingEnabled = false;
    
    for (let y = 0; y < data.length; y++) {
        for (let x = 0; x < data[y].length; x++) {
            const colorCode = data[y][x];
            if (PALETTE[colorCode]) {
                tCtx.fillStyle = PALETTE[colorCode];
                tCtx.fillRect(x * scale, y * scale, scale, scale);
            }
        }
    }
    return temp;
}

// Procedural color darkening for 3D extrusion shading
function adjustColorBrightness(hex, factor) {
    if (!hex || hex === 'transparent') return null;
    let r, g, b;
    if (hex.startsWith('#')) {
        const bigint = parseInt(hex.slice(1), 16);
        if (hex.length === 4) {
            r = ((bigint >> 8) & 0xf) * 17;
            g = ((bigint >> 4) & 0xf) * 17;
            b = (bigint & 0xf) * 17;
        } else {
            r = (bigint >> 16) & 255;
            g = (bigint >> 8) & 255;
            b = bigint & 255;
        }
    } else if (hex.startsWith('rgb')) {
        const match = hex.match(/\d+/g);
        if (match) {
            r = parseInt(match[0]);
            g = parseInt(match[1]);
            b = parseInt(match[2]);
        } else {
            return hex;
        }
    } else {
        return hex;
    }
    r = Math.max(0, Math.min(255, Math.round(r * factor)));
    g = Math.max(0, Math.min(255, Math.round(g * factor)));
    b = Math.max(0, Math.min(255, Math.round(b * factor)));
    return `rgb(${r}, ${g}, ${b})`;
}

// Procedural 3D stacked sprite pre-renderer
function preRenderSprite3D(data, scale = PIXEL, depth = 6, dx = -1.2, dy = -1.2) {
    const temp = document.createElement('canvas');
    const origW = data[0].length * scale;
    const origH = data.length * scale;
    
    // Total shifts
    const shiftX = Math.abs(dx) * depth;
    const shiftY = Math.abs(dy) * depth;
    
    temp.width = Math.ceil(origW + shiftX);
    temp.height = Math.ceil(origH + shiftY);
    temp.originalWidth = origW;
    temp.originalHeight = origH;
    
    const tCtx = temp.getContext('2d');
    tCtx.imageSmoothingEnabled = false;
    
    // Draw layers from back (i = depth - 1) to front (i = 0)
    for (let i = depth - 1; i >= 0; i--) {
        // Calculate offsets based on direction
        const offsetX = dx < 0 ? (depth - 1 - i) * Math.abs(dx) : i * dx;
        const offsetY = dy < 0 ? (depth - 1 - i) * Math.abs(dy) : i * dy;
        
        // Darken back layers for lighting depth
        const factor = depth > 1 ? 0.45 + 0.55 * (1 - i / (depth - 1)) : 1.0;
        
        for (let y = 0; y < data.length; y++) {
            for (let x = 0; x < data[y].length; x++) {
                const colorCode = data[y][x];
                if (PALETTE[colorCode]) {
                    const baseColor = PALETTE[colorCode];
                    const darkColor = adjustColorBrightness(baseColor, factor);
                    tCtx.fillStyle = darkColor || baseColor;
                    tCtx.fillRect(offsetX + x * scale, offsetY + y * scale, scale, scale);
                }
            }
        }
    }
    return temp;
}

// Generate assets
function buildAssetCache() {
    // Character Animations (using 3D pre-renderer)
    for (const char in CHAR_STATS) {
        ASSETS[char] = {
            f1: preRenderSprite3D(SPRITE_DATA[char].f1, PIXEL, 6, -1.2, -1.2),
            f2: preRenderSprite3D(SPRITE_DATA[char].f2, PIXEL, 6, -1.2, -1.2),
            duck: preRenderSprite3D(SPRITE_DATA[char].duck, PIXEL, 6, -1.2, -1.2)
        };
    }
    // Environment Obstacles & Items (using 3D pre-renderer)
    ASSETS.tree = preRenderSprite3D(SPRITE_DATA.env.tree, PIXEL, 6, -1.2, -1.2);
    ASSETS.tree2 = preRenderSprite3D(SPRITE_DATA.env.tree2, PIXEL, 6, -1.2, -1.2);
    ASSETS.carrot = preRenderSprite3D(SPRITE_DATA.env.carrot, PIXEL, 4, -1.0, -1.0);
    ASSETS.goldenCarrot = preRenderSprite3D(SPRITE_DATA.env.goldenCarrot, PIXEL, 4, -1.0, -1.0);
    ASSETS.shieldPowerup = preRenderSprite3D(SPRITE_DATA.env.shieldPowerup, PIXEL, 4, -1.0, -1.0);
    ASSETS.bird1 = preRenderSprite3D(SPRITE_DATA.env.bird1, PIXEL, 5, -1.2, -1.2);
    ASSETS.bird2 = preRenderSprite3D(SPRITE_DATA.env.bird2, PIXEL, 5, -1.2, -1.2);
}

// 5. PARALLAX SCROLLING BACKGROUND
class ParallaxBackground {
    constructor() {
        this.stars = [];
        this.clouds = [];
        this.mountains = [];
        this.hills = [];
        this.init();
    }

    init() {
        // Build Night Stars
        this.stars = [];
        for (let i = 0; i < 40; i++) {
            this.stars.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * (window.innerHeight * 0.45),
                size: Math.random() * 2 + 1,
                alpha: Math.random(),
                blinkSpeed: 0.01 + Math.random() * 0.02
            });
        }

        // Build Procedural Clouds
        this.clouds = [];
        for (let i = 0; i < 5; i++) {
            this.clouds.push({
                x: Math.random() * window.innerWidth,
                y: 30 + Math.random() * 80,
                width: 100 + Math.random() * 120,
                height: 25 + Math.random() * 20,
                speed: 0.1 + Math.random() * 0.25
            });
        }

        // Far Mountains (Flat silhouette peaks)
        this.mountains = [];
        let curX = 0;
        while (curX < window.innerWidth + 400) {
            const w = 250 + Math.random() * 250;
            const h = 120 + Math.random() * 100;
            this.mountains.push({ x: curX, w: w, h: h });
            curX += w - 40; // overlap slightly
        }

        // Closer Hills (Gentle rolling landscape)
        this.hills = [];
        curX = 0;
        while (curX < window.innerWidth + 300) {
            const w = 150 + Math.random() * 150;
            const h = 60 + Math.random() * 50;
            this.hills.push({ x: curX, w: w, h: h });
            curX += w - 20;
        }
    }

    resize() {
        this.init();
    }

    update(speed) {
        // Move clouds slowly
        this.clouds.forEach(c => {
            c.x -= c.speed;
            if (c.x + c.width < 0) c.x = window.innerWidth + 50;
        });

        // Move mountains (Parallax multiplier: 0.05)
        this.mountains.forEach(m => {
            m.x -= speed * 0.05;
            if (m.x + m.w < 0) {
                // Find furthest right mountain coordinate
                const maxRight = Math.max(...this.mountains.map(other => other.x + other.w));
                m.x = maxRight - 40;
            }
        });

        // Move hills (Parallax multiplier: 0.2)
        this.hills.forEach(h => {
            h.x -= speed * 0.2;
            if (h.x + h.w < 0) {
                const maxRight = Math.max(...this.hills.map(other => other.x + other.w));
                h.x = maxRight - 20;
            }
        });

        // Twinkle stars
        this.stars.forEach(s => {
            s.alpha += s.blinkSpeed;
            if (s.alpha > 1 || s.alpha < 0.2) {
                s.blinkSpeed = -s.blinkSpeed;
            }
        });
    }

    draw(ctx, groundY, skyColors, cycleProgress) {
        // 1. SKY GRADIENT
        const grad = ctx.createLinearGradient(0, 0, 0, groundY);
        grad.addColorStop(0, skyColors.top);
        grad.addColorStop(1, skyColors.bottom);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, groundY);

        // 2. STARS (Only visible during sunrise, sunset and night)
        let starAlphaFactor = 0;
        if (cycleProgress >= 0.35 && cycleProgress <= 0.85) {
            // Maximum night transparency
            if (cycleProgress >= 0.45 && cycleProgress <= 0.75) {
                starAlphaFactor = 1;
            } else if (cycleProgress < 0.45) {
                starAlphaFactor = (cycleProgress - 0.35) / 0.1; // Sunrise fading in
            } else {
                starAlphaFactor = (0.85 - cycleProgress) / 0.1; // Sunset fading out
            }
        }

        if (starAlphaFactor > 0) {
            ctx.save();
            ctx.globalAlpha = starAlphaFactor;
            this.stars.forEach(s => {
                ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
                ctx.fillRect(s.x, s.y, s.size, s.size);
            });
            ctx.restore();
        }

        // 3. CLOUDS (Opacity drops a bit at night)
        ctx.save();
        ctx.globalAlpha = cycleProgress >= 0.45 && cycleProgress <= 0.75 ? 0.3 : 0.65;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        this.clouds.forEach(c => {
            ctx.beginPath();
            ctx.arc(c.x + c.width * 0.25, c.y + c.height * 0.5, c.height * 0.5, 0, Math.PI * 2);
            ctx.arc(c.x + c.width * 0.5, c.y + c.height * 0.3, c.height * 0.7, 0, Math.PI * 2);
            ctx.arc(c.x + c.width * 0.75, c.y + c.height * 0.5, c.height * 0.5, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.restore();

        // 4. FAR MOUNTAINS
        ctx.fillStyle = skyColors.mountain;
        this.mountains.forEach(m => {
            ctx.beginPath();
            ctx.moveTo(m.x, groundY);
            ctx.lineTo(m.x + m.w * 0.5, groundY - m.h);
            ctx.lineTo(m.x + m.w, groundY);
            ctx.closePath();
            ctx.fill();
        });

        // 5. CLOSE HILLS
        ctx.fillStyle = skyColors.hill;
        this.hills.forEach(h => {
            ctx.beginPath();
            ctx.moveTo(h.x, groundY);
            // Quadratic curve to draw smooth rolling hills
            ctx.quadraticCurveTo(h.x + h.w * 0.5, groundY - h.h * 2, h.x + h.w, groundY);
            ctx.closePath();
            ctx.fill();
        });
    }
}

// 6. PARTICLE EFFECT SYSTEM
class ParticleEngine {
    constructor() {
        this.particles = [];
    }

    spawn(x, y, color, speedScale = 1, count = 1, size = 3, forceY = 0) {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const velocity = (Math.random() * 3 + 1) * speedScale;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * velocity,
                vy: (Math.sin(angle) * velocity) + forceY,
                color: color,
                size: Math.random() * size + 1,
                alpha: 1,
                decay: 0.02 + Math.random() * 0.03
            });
        }
    }

    update() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= p.decay;

            // Apply light gravity to particles
            p.vy += 0.05;

            if (p.alpha <= 0) {
                this.particles.splice(i, 1);
            }
        }
    }

    draw(ctx) {
        ctx.save();
        this.particles.forEach(p => {
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.fillRect(p.x, p.y, p.size, p.size);
        });
        ctx.restore();
    }
}

// 7. MAIN GAME STATE CONTROL
let isRunning = false;
let animationId;
let selectedChar = 'bunny';
let skyCycleProgress = 0.0; // 0.0 to 1.0 day/night cycle

let playerY = 0, velocityY = 0;
let isJumping = false, isDucking = false;
let jumpCount = 0; // support double jump
let hasShield = false;
let lives = 1;

let groundY;
let playerX = 100;
let obstacles = []; // contains trees, birds, carrots, shields
let activeCharConfig = CHAR_STATS.bunny;

let speed = 7;
let score = 0, carrotsCollected = 0;
let frameCount = 0;
let screenshake = 0;

let highScore = localStorage.getItem("SafeRunnerHiScore") || 0;

const BgRenderer = new ParallaxBackground();
const ParticleSystem = new ParticleEngine();

// Get Sky colors based on current time cycle
function getEnvironmentColors(progress) {
    // Interpolate progress through four phases: Day, Sunset, Night, Sunrise
    // progress: 0 to 0.25 (Day), 0.25 to 0.5 (Sunset), 0.5 to 0.75 (Night), 0.75 to 1.0 (Sunrise)
    
    let top, bottom, mountain, hill, ground;
    
    if (progress < 0.25) { // Day
        top = "#87CEEB"; bottom = "#CDE8F5";
        mountain = "#67A5C2"; hill = "#498BA6"; ground = "#2C5D75";
    } else if (progress < 0.45) { // Sunset
        // blend from Day to Sunset
        const t = (progress - 0.25) / 0.20;
        top = lerpColor("#87CEEB", "#140c24", t);
        bottom = lerpColor("#CDE8F5", "#FF7F50", t);
        mountain = lerpColor("#67A5C2", "#472850", t);
        hill = lerpColor("#498BA6", "#2D1B36", t);
        ground = lerpColor("#2C5D75", "#1B1020", t);
    } else if (progress < 0.75) { // Night
        const t = (progress - 0.45) / 0.30;
        top = lerpColor("#140c24", "#030408", t);
        bottom = lerpColor("#FF7F50", "#080c1b", t);
        mountain = lerpColor("#472850", "#0C1226", t);
        hill = lerpColor("#2D1B36", "#070B18", t);
        ground = lerpColor("#1B1020", "#04060C", t);
    } else { // Sunrise
        const t = (progress - 0.75) / 0.25;
        top = lerpColor("#030408", "#87CEEB", t);
        bottom = lerpColor("#080c1b", "#CDE8F5", t);
        mountain = lerpColor("#0C1226", "#67A5C2", t);
        hill = lerpColor("#070B18", "#498BA6", t);
        ground = lerpColor("#04060C", "#2C5D75", t);
    }

    return { top, bottom, mountain, hill, ground };
}

// Lerp helper
function lerpColor(color1, color2, t) {
    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);
    
    const r = Math.round(c1.r + (c2.r - c1.r) * t);
    const g = Math.round(c1.g + (c2.g - c1.g) * t);
    const b = Math.round(c1.b + (c2.b - c1.b) * t);
    
    return `rgb(${r}, ${g}, ${b})`;
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.replace("#", ""), 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

// 8. CANVAS AND VIEWPORT SIZING
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Scale assets dynamically based on screen width
    PIXEL = window.innerWidth < 800 ? 3 : 4;
    buildAssetCache();
    
    groundY = window.innerHeight * 0.75;
    playerX = window.innerWidth * 0.12;
    
    BgRenderer.resize();
}

window.addEventListener('resize', resize);
resize();

// Draw character menus
function setupCharacterMenus() {
    ['bunny', 'fox', 'cat', 'bear'].forEach(char => {
        const menuCanvas = document.getElementById(`menu-${char}`);
        if (menuCanvas) {
            const mCtx = menuCanvas.getContext('2d');
            mCtx.clearRect(0, 0, 64, 64);
            mCtx.imageSmoothingEnabled = false;
            // Draw static f1 sprite scaled up to fit 64x64
            mCtx.drawImage(ASSETS[char].f1, 0, 0, ASSETS[char].f1.width, ASSETS[char].f1.height, 4, 4, 56, 56);
        }
    });
}

// Initialize Menu on boot
setTimeout(() => {
    buildAssetCache();
    setupCharacterMenus();
    updateCharacterStats('bunny');
}, 100);

// UI Click Trigger
window.selectChar = function(charKey, element) {
    if (isRunning) return;
    selectedChar = charKey;
    
    document.querySelectorAll('.char-card').forEach(c => c.classList.remove('selected'));
    element.classList.add('selected');
    
    updateCharacterStats(charKey);
    AudioEngine.playJump();
};

function updateCharacterStats(charKey) {
    const stats = CHAR_STATS[charKey];
    activeCharConfig = stats;
    
    document.getElementById('stat-speed-bar').style.width = `${stats.bars.speed}%`;
    document.getElementById('stat-jump-bar').style.width = `${stats.bars.jump}%`;
    document.getElementById('stat-weight-bar').style.width = `${stats.bars.weight}%`;
    document.getElementById('ability-text').innerText = stats.ability;
}

// 9. CONTROLS ENGINE
function jump() {
    if (!isRunning) return;
    
    const maxJumps = activeCharConfig.doubleJump ? 2 : 1;
    if (jumpCount < maxJumps) {
        velocityY = activeCharConfig.jumpForce;
        isJumping = true;
        jumpCount++;
        
        // Spawn jump dust particles
        ParticleSystem.spawn(playerX + 25, groundY - playerY, '#ffffff', 0.8, 8, 3, 1);
        AudioEngine.playJump();
    }
}

function duck(activate) {
    if (!isRunning) return;
    
    // Float/Hover ability for Cat
    if (!activate && activeCharConfig.hover && isJumping && velocityY < 0) {
        // Stop float
    }
    
    isDucking = activate;
    if (activate && isJumping) {
        // Fast fall on heavy slide down
        velocityY -= 3.5;
        AudioEngine.playDuck();
    }
}

// Event Listeners
window.addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.code === "ArrowUp") { 
        e.preventDefault(); 
        jump(); 
    }
    if (e.code === "ArrowDown") { 
        e.preventDefault(); 
        duck(true); 
    }
});

window.addEventListener("keyup", (e) => {
    if (e.code === "ArrowDown") {
        duck(false);
    }
    // Variable Jump height damping
    if (e.code === "Space" || e.code === "ArrowUp") {
        if (velocityY > 3) {
            velocityY = 3; // cut velocity short
        }
    }
});

// Touch and Mouse handlers for Mobile
window.addEventListener("touchstart", (e) => {
    if (!isRunning) return;
    
    // Check if user clicked HUD settings
    if (e.target.closest('#settings-toggle') || e.target.closest('#settings-drawer')) return;
    
    e.preventDefault();
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;
    
    // Left side touch jumps, Right side ducks
    if (touchX < window.innerWidth / 2) {
        jump();
    } else {
        duck(true);
    }
}, { passive: false });

window.addEventListener("touchend", (e) => {
    duck(false);
});

// Canvas mouse click runs jumps
window.addEventListener("mousedown", (e) => {
    if (isRunning && e.clientX > 120 && e.clientY > 80) { // bypass top-left HUD click area
        jump();
    }
});

// 10. SPAWNING ENGINE FOR OBSTACLES & POWERUPS
function spawnObstacle() {
    const minDistance = 500;
    
    // Find rightmost obstacle coordinate
    let rightmost = window.innerWidth;
    obstacles.forEach(o => {
        if (o.x > rightmost) rightmost = o.x;
    });

    const nextSpawnX = rightmost + minDistance + Math.random() * 500;
    const roll = Math.random();

    // 1. Bird obstacle (Requires score > 200)
    if (roll < 0.25 && score > 200) {
        const flightHeights = [groundY - 140, groundY - 70, groundY - 20];
        const birdAsset = ASSETS.bird1;
        obstacles.push({
            type: 'bird',
            x: nextSpawnX,
            y: flightHeights[Math.floor(Math.random() * flightHeights.length)],
            w: birdAsset.originalWidth || birdAsset.width,
            h: birdAsset.originalHeight || birdAsset.height,
            speedMultiplier: 1.2
        });
    }
    // 2. Shield Bubble power-up (Rare, only spawns if player doesn't have shield)
    else if (roll < 0.32 && !hasShield) {
        const shieldAsset = ASSETS.shieldPowerup;
        obstacles.push({
            type: 'shield',
            x: nextSpawnX,
            y: groundY - 80 - Math.random() * 50,
            w: shieldAsset.originalWidth || shieldAsset.width,
            h: shieldAsset.originalHeight || shieldAsset.height,
            collected: false
        });
    }
    // 3. Carrot / Golden Carrot Collectible
    else if (roll < 0.60) {
        const isGolden = Math.random() < 0.08; // 8% chance golden
        const carrotAsset = isGolden ? ASSETS.goldenCarrot : ASSETS.carrot;
        obstacles.push({
            type: isGolden ? 'goldenCarrot' : 'carrot',
            x: nextSpawnX,
            y: groundY - 50 - Math.random() * 80,
            w: carrotAsset.originalWidth || carrotAsset.width,
            h: carrotAsset.originalHeight || carrotAsset.height,
            collected: false
        });
    }
    // 4. Ground trees obstacles (Standard)
    else {
        const isTree2 = Math.random() < 0.4;
        const currentTree = isTree2 ? ASSETS.tree2 : ASSETS.tree;
        obstacles.push({
            type: 'tree',
            x: nextSpawnX,
            y: groundY - (currentTree.originalHeight || currentTree.height),
            w: currentTree.originalWidth || currentTree.width,
            h: currentTree.originalHeight || currentTree.height,
            asset: isTree2 ? 'tree2' : 'tree'
        });
    }
}

// 11. GAME STATE RUNNER
window.startGame = function() {
    // Audio Context Resume sequence
    AudioEngine.init();
    if (AudioEngine.ctx && AudioEngine.ctx.state === 'suspended') {
        AudioEngine.ctx.resume();
    }
    AudioEngine.startBGM();

    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-over-screen").classList.remove('active');
    
    score = 0;
    carrotsCollected = 0;
    frameCount = 0;
    skyCycleProgress = 0.0;
    
    // Set speed based on character multipliers
    speed = (window.innerWidth < 800 ? 5.5 : 7.5) * activeCharConfig.speed;
    
    playerY = 0;
    velocityY = 0;
    isJumping = false;
    isDucking = false;
    jumpCount = 0;
    hasShield = false;
    screenshake = 0;
    
    // Get Character stats configuration
    lives = activeCharConfig.maxLives;
    updateLivesUI();
    
    // Initialize scrolling backdrops
    BgRenderer.init();
    ParticleSystem.particles = [];
    obstacles = [];
    
    // Pre-populate with first obstacles
    for (let i = 0; i < 3; i++) {
        spawnObstacle();
    }
    
    isRunning = true;
    if (animationId) cancelAnimationFrame(animationId);
    gameLoop();
};

function updateLivesUI() {
    const container = document.getElementById('lives-display');
    container.innerHTML = '';
    for (let i = 0; i < lives; i++) {
        container.innerHTML += '<span class="heart">❤</span>';
    }
}

function checkHitbox(r1, r2) {
    const padding = 10; // Tight pixel hitbox buffer
    return (
        r1.x + padding < r2.x + r2.w - padding &&
        r1.x + r1.w - padding > r2.x + padding &&
        r1.y + padding < r2.y + r2.h - padding &&
        r1.y + r1.h - padding > r2.y + padding
    );
}

function handleCrash() {
    screenshake = 18;
    
    if (hasShield) {
        hasShield = false;
        AudioEngine.playShieldBreak();
        ParticleSystem.spawn(playerX + 30, groundY - playerY - 30, '#00F0FF', 1.5, 25, 4);
        return; // Survived hit!
    }
    
    lives--;
    updateLivesUI();
    
    if (lives > 0) {
        AudioEngine.playShieldBreak();
        ParticleSystem.spawn(playerX + 30, groundY - playerY - 30, '#ff1654', 1.5, 25, 4);
        return; // Survive because of extra heart (Bear)
    }

    // Dead
    isRunning = false;
    AudioEngine.playCrash();
    AudioEngine.stopBGM();
    
    // Particle burst on crash
    ParticleSystem.spawn(playerX + 30, groundY - playerY - 30, '#FF5722', 2, 40, 5, -3);
    ParticleSystem.spawn(playerX + 30, groundY - playerY - 30, '#FFD166', 1.2, 20, 3, -1);
    
    // Update local storage high score
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("SafeRunnerHiScore", highScore);
        document.getElementById("hi-score").innerText = String(Math.floor(highScore)).padStart(5, '0');
    }
    
    // Show game over metrics
    document.getElementById("game-over-screen").classList.add('active');
    document.getElementById("go-score").innerText = String(Math.floor(score)).padStart(5, '0');
    document.getElementById("go-carrots").innerText = String(carrotsCollected).padStart(2, '0');
}

// 12. CORE GAME REFRESH LOOP
function gameLoop() {
    if (!isRunning) return;
    frameCount++;

    // Day/Night Cycle Speed
    skyCycleProgress = (frameCount * 0.0003) % 1.0;
    const environmentColors = getEnvironmentColors(skyCycleProgress);

    // Apply Background colors and draw Parallax
    BgRenderer.update(speed);
    BgRenderer.draw(ctx, groundY, environmentColors, skyCycleProgress);

    // Physics Engine
    if (isJumping) {
        playerY += velocityY;
        velocityY -= activeCharConfig.gravity; // Gravity based on selected runner
        
        // Cat Floaty jump hold check
        if (activeCharConfig.hover && velocityY < 0 && (isDucking || isJumping)) {
            // Apply slight lift if hovering
        }
        
        if (playerY <= 0) {
            playerY = 0;
            isJumping = false;
            velocityY = 0;
            jumpCount = 0;
        }
    }

    // Dust particles kickup when running on the ground
    if (!isJumping && frameCount % 5 === 0) {
        ParticleSystem.spawn(playerX + 15, groundY - 5, 'rgba(255,255,255,0.4)', 0.4, 2, 2);
    }

    // DRAW GROUND
    ctx.fillStyle = environmentColors.ground;
    ctx.fillRect(0, groundY, canvas.width, canvas.height - groundY);
    ctx.fillStyle = environmentColors.hill;
    ctx.fillRect(0, groundY, canvas.width, 6); // Ground trim

    // OBSTACLE AND SPAWNING LOGIC
    if (obstacles.length < 5) {
        spawnObstacle();
    }

    // Render sprites
    let isFrame1 = (Math.floor(frameCount / 6) % 2 === 0);
    let runnerSprite;
    
    if (isDucking && !isJumping) {
        runnerSprite = ASSETS[selectedChar].duck;
    } else if (isJumping) {
        runnerSprite = ASSETS[selectedChar].f1;
    } else {
        runnerSprite = isFrame1 ? ASSETS[selectedChar].f1 : ASSETS[selectedChar].f2;
    }

    // Render Player
    const xOffset = runnerSprite.originalWidth ? (runnerSprite.width - runnerSprite.originalWidth) : 0;
    const yOffset = runnerSprite.originalHeight ? (runnerSprite.height - runnerSprite.originalHeight) : 0;
    const origW = runnerSprite.originalWidth || runnerSprite.width;
    const origH = runnerSprite.originalHeight || runnerSprite.height;
    
    let pDrawY = groundY - runnerSprite.height - playerY;
    
    // Screenshake offset calculation
    let shakeX = 0, shakeY = 0;
    if (screenshake > 0) {
        shakeX = (Math.random() - 0.5) * screenshake;
        shakeY = (Math.random() - 0.5) * screenshake;
        screenshake *= 0.9; // decay shake
        if (screenshake < 0.5) screenshake = 0;
    }

    ctx.save();
    ctx.translate(shakeX, shakeY);
    
    // Draw Shield Bubble if active
    if (hasShield) {
        ctx.beginPath();
        ctx.arc(playerX + origW/2, pDrawY + yOffset + origH/2, origW/1.2, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 240, 255, ${0.4 + Math.sin(frameCount * 0.1) * 0.2})`;
        ctx.lineWidth = 4;
        ctx.shadowColor = '#00F0FF';
        ctx.shadowBlur = 15;
        ctx.stroke();
    }

    ctx.drawImage(runnerSprite, playerX - xOffset, pDrawY);
    ctx.restore();

    // Process and draw obstacles
    let pRect = { x: playerX, y: pDrawY + yOffset, w: origW, h: origH };

    for (let i = obstacles.length - 1; i >= 0; i--) {
        const o = obstacles[i];
        
        // Move obstacles
        let currentSpeed = speed;
        if (o.type === 'bird') currentSpeed = speed * o.speedMultiplier;
        o.x -= currentSpeed;

        // Cleanup out of bounds
        if (o.x < -150) {
            obstacles.splice(i, 1);
            continue;
        }

        // Draw obstacle
        let activeAsset = null;
        
        if (o.type === 'tree') {
            activeAsset = o.asset === 'tree2' ? ASSETS.tree2 : ASSETS.tree;
        } 
        else if (o.type === 'bird') {
            activeAsset = (Math.floor(frameCount / 8) % 2 === 0) ? ASSETS.bird1 : ASSETS.bird2;
        }
        else if (o.type === 'carrot' && !o.collected) {
            activeAsset = ASSETS.carrot;
        }
        else if (o.type === 'goldenCarrot' && !o.collected) {
            activeAsset = ASSETS.goldenCarrot;
            // Spawn golden particles on it
            if (frameCount % 12 === 0) {
                ParticleSystem.spawn(o.x + (activeAsset.originalWidth || activeAsset.width) / 2, o.y + (activeAsset.originalHeight || activeAsset.height) / 2, '#FFD166', 0.2, 1, 2);
            }
        }
        else if (o.type === 'shield' && !o.collected) {
            activeAsset = ASSETS.shieldPowerup;
            // Glowing particles around powerup
            if (frameCount % 10 === 0) {
                ParticleSystem.spawn(o.x + (activeAsset.originalWidth || activeAsset.width) / 2, o.y + (activeAsset.originalHeight || activeAsset.height) / 2, '#00F0FF', 0.3, 1, 2);
            }
        }

        if (activeAsset) {
            const oxOffset = activeAsset.originalWidth ? (activeAsset.width - activeAsset.originalWidth) : 0;
            const oyOffset = activeAsset.originalHeight ? (activeAsset.height - activeAsset.originalHeight) : 0;
            ctx.drawImage(activeAsset, o.x - oxOffset, o.y - oyOffset);
        }

        // Collisions checks
        let oRect = { x: o.x, y: o.y, w: o.w, h: o.h };
        
        if (o.type === 'tree' || o.type === 'bird') {
            if (checkHitbox(pRect, oRect)) {
                // Delete obstacle on collision to prevent continuous hitting
                obstacles.splice(i, 1);
                handleCrash();
                continue;
            }
        } 
        else if ((o.type === 'carrot' || o.type === 'goldenCarrot') && !o.collected) {
            if (checkHitbox(pRect, oRect)) {
                o.collected = true;
                const points = o.type === 'goldenCarrot' ? 250 : 50;
                const count = o.type === 'goldenCarrot' ? 5 : 1;
                
                carrotsCollected += count;
                score += points;
                
                // Spawn happy star particles
                const color = o.type === 'goldenCarrot' ? '#FFD166' : '#FF9800';
                ParticleSystem.spawn(o.x + o.w / 2, o.y + o.h / 2, color, 1.2, 15, 3);
                AudioEngine.playCarrot();
                
                // remove from active list
                obstacles.splice(i, 1);
            }
        }
        else if (o.type === 'shield' && !o.collected) {
            if (checkHitbox(pRect, oRect)) {
                o.collected = true;
                hasShield = true;
                ParticleSystem.spawn(o.x + o.w / 2, o.y + o.h / 2, '#00F0FF', 1.2, 20, 3);
                AudioEngine.playPowerup();
                obstacles.splice(i, 1);
            }
        }
    }

    // Particle Engine tick
    ParticleSystem.update();
    ParticleSystem.draw(ctx);

    // Progression difficulty speedup
    score += 0.15;
    if (score > 100 && speed < 18) {
        speed += 0.0025;
    }

    // Refresh HUD
    document.getElementById("score").innerText = String(Math.floor(score)).padStart(5, '0');
    document.getElementById("carrot-count").innerText = String(carrotsCollected).padStart(2, '0');

    animationId = requestAnimationFrame(gameLoop);
}

// 13. SETTINGS PANEL INTERACTIVE ACTIONS
const settingsToggle = document.getElementById('settings-toggle');
const settingsDrawer = document.getElementById('settings-drawer');

if (settingsToggle && settingsDrawer) {
    settingsToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        settingsDrawer.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!settingsDrawer.contains(e.target) && e.target !== settingsToggle) {
            settingsDrawer.classList.remove('open');
        }
    });
}

// Hook Audio sliders
const sfxSwitch = document.getElementById('sfx-switch');
const bgmSwitch = document.getElementById('bgm-switch');

if (sfxSwitch) {
    sfxSwitch.addEventListener('change', (e) => {
        AudioEngine.setSFXMute(!e.target.checked);
    });
}

if (bgmSwitch) {
    bgmSwitch.addEventListener('change', (e) => {
        AudioEngine.setBGMMute(!e.target.checked);
    });
}

// 14. DISCORD EMBEDDED APP SDK INTEGRATION
async function initDiscordActivity() {
    const params = new URLSearchParams(window.location.search);
    const isDiscordFrame = params.has('frame_id') || 
                           (window.location.ancestorOrigins && 
                            Array.from(window.location.ancestorOrigins).some(o => o.includes('discord')));
    
    if (isDiscordFrame) {
        console.log("Discord context detected. Loading Embedded App SDK...");
        try {
            // Import ESM version of Discord SDK dynamically
            const { DiscordSDK } = await import("https://cdn.jsdelivr.net/npm/@discord/embedded-app-sdk/+esm");
            
            // Set up placeholder client ID (User can replace this in Developer Portal settings)
            const clientId = "124413592200000000"; 
            const discordSdk = new DiscordSDK(clientId);
            
            await discordSdk.ready();
            console.log("Discord SDK initialized successfully!");
        } catch (err) {
            console.error("Failed to initialize Discord Embedded App SDK:", err);
        }
    }
}
initDiscordActivity();

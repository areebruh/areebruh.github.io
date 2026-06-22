"use strict";

// ===========
// CONTENT 
// ===========

const INTRO = `i think about mathematics the way some people think about god, as something you can only ever approach obliquely, never quite arriving. these are fieldnotes: lists, fragments, marginalia, small rooms of unsorted thinking.`;
const INTRO_CTA = "come read ?";

const THRESHOLD_INTRO = `hello. i'm areeba arbab. this is a slow, deliberately untidy room — fieldnotes from a mind that keeps trying to fold mathematics, philosophy, and devotion into the same envelope. nothing here is finished. most of it is on purpose.`;
const THRESHOLD_CTA = "glad tidings, stranger";

const WRITINGS_EPIGRAPH = {
  text: "The text is a tissue of quotations drawn from the innumerable centres of culture.",
  author: "Roland Barthes, The Death of the Author",
};

// chrono order based on whats pasted on top
// Fields: slug (URL), date, kind (type of content), title, body (plain text, blank line = new para),
//         epigraph (optional pull-quote), theme (optional grouping label),
//         interludes (optional ASCII breaks)

const ENTRIES = [
  {slug:"name-means",date:"2026.06.20",kind:"list",title:"A list of things my name means",theme:"misc",body:"1. Tie a knot 2. Tear to pieces 3. The ancient Arbela 4. Try to outwit 5. The “other uses” of Moses’s staff 6. The capital of the Ancient kingdom of Saba’ 7. Intelligence, skillfulness and proficiency  8. Wish and desire, purpose and goal 9. A dam in Yemen."},
  {
  "slug": "fieldnotes-on-fieldnotes",
  "date": "2026.06.20",
  "kind": "note",
  "title": "fieldnotes on fieldnotes",
  "theme": "misc",
  "body": "از کفر و ز اسلام برون صحرائی است\naz kufr-o ze-islâm berûn, SaHrâyê-st\n\nOut beyond ideas of wrongdoing and rightdoing,\nThere is a field. I'll meet you there.\n\n— Mawlana Rum (trans. Coleman Barks)\n\nBeyond disbelief and submission, Rumi tells us, is the expanse of a desert (sahrâ) — a space constituted by the beloved's absence, the place where the lover wanders, the place where the encounter, if it happens, is always unexpected. French philosopher Gilles Deleuze speaks of the desert's featurelessness, the impossibility of its navigation, but also as a space for \"intense creation\", fully releasing the psychotic. Similarly but unrelatedly, there is his plan d'immanence: the idea that the beyond-edness isn't found in Christian transcendence to the celestial above us or the Platonic realm, but rather in a single, flat plane. For the sun, one must not fashion wings for flying into it; one must journey through the desert of the real on a camel.\n\nIn physics, we have fields as mediums of happenings — spaces so beautifully symmetric, spanning from the simplicity of classical field lines of a bar magnet to the non-Abelian gauge fields of quantum chromodynamics in QFT. (Overall there are twenty-eight fundamental fields in physics.) This site, too, is just a field. Perhaps more humbly, a mathematical one — a system or structure containing some self-contained elements. I am sorry about the onslaught of internal links.\n\n<a href=\"https://www.merriam-webster.com/dictionary/field%20note\">Fieldnote</a> (noun): \"an item in the systematic record of measurements … by … observations … in the field\".\n\nMy field axioms, based on <a href=\"https://en.wikipedia.org/wiki/Robert_K._Yin\">Robert Yin's rules</a>:\n\n1. Create vivid images\n2. The verbatim principle\n3. Develop one's own transcribing language\n4. Convert fieldnotes to full notes daily\n5. Verify notes during collection\n6. Obtain permission to record\n7. Keep a personal journal in addition to fieldnotes\n\nGrowing up, my father only had abstract or teetering-abstract-landscape paintings hung around — everything that gestured toward what could not be captured. Baudrillard says: \"Music, commercial breaks, news flashes, adverts, news broadcasts, movies, presenters — there is no alternative but to fill the screen; otherwise there would be an irremediable void. We are back in the Byzantine situation, where idolatry calls on a plethora of images to conceal from itself the fact that God no longer exists.\" I want this site to be a visual black hole, housing ASCII art only — just colons, dashes, and dots as fluctuations in this void. Less visual, more empty space. An image that is not an image but a trace of one, a sign that insists on its own constructedness. Its vividness rests entirely upon your brain's filling of the gaps, but perhaps you could resist it, and sit with the silence of non-representation. In the Quran, we are called on to believe in the unseen. I believe that belief via the visual is a technology of the antichrist — see the <a href=\"https://sunnah.com/muslim:2934b\">hadith</a> on that which \"appears to the eye\".\n\nThe Quranic revelation is verbatim; it is transmitted via the oral. Hence, making the verbatim a non-negotiable in the principles of knowledge transmission. Before reciting certain parts of our scripture, we are commanded to \"Say\" — qul. Later generations of Muslim mathematicians would begin their proofs with this same \"say\".\n\nA private alphabet has been a long-held dream of mine, one that translated itself into a fascination with encryption and ciphers. My favourite protocol is photonic encryption: using photons to encode information in the quantum states of light. I have performed this physically at a confidential facility.\n\n<i>Expand the chest</i>.\n\nTahqiq is another hard epistemic principle in my tradition. We must verify and seek verification of the truth, whether it is through signs or experiment.\n\nTo operate not with the violence of the Enlightenment — the fetish of wanting to shed light on everything — but to act as a witness to what you are allowed to see by God, and to respect the other's right to opacity. Receiving requires that you are <i>given</i>.\n\nThe site is public (the zâhir); the journal is unshown (the bâtin). The field requires this shadow. This is the structure of revelation itself: the manifest and the hidden, the text and the commentary, the word and the interpretation. Both are necessary. Neither is sufficient. The field exists in the tension between them.\n\n<i>Fieldnotes on fieldnotes</i> is a recursive title. It is a strange loop. Notes about notes. Margins about margins. A notebook turning back on itself. Fieldnotes on the very act of taking fieldnotes — the field commenting on itself, the observer observing the observation. This recursion is not a gimmick; it is the structure of any serious encounter with the real. To be in the field is to be aware that you are in the field. To take notes is to take note of the note-taking. To write is to write about writing.\n\nThat is the discipline. That is the practice. That is the field.\n\nاز کفر و ز اسلام برون صحرائی است\naz kufr-o ze-islâm berûn, SaHrâyê-st\n\nBeyond disbelief and submission, there is a desert.\n\nI'll meet you there."
}
  {slug:"simone-weil",date:"2026.06.20",kind:"note",title:"simone weil and attention",theme:"misc",body:"Weilian attention"},
  {slug:"the-oscar-wilde-quote",date:"2026.06.20",kind:"essay",title:"the oscar wilde quote",theme:"misc",body:"“What of art?” she asked. “It is a malady.” “Love?” “An illusion.” “Religion?” “The fashionable substitute for belief.” “You are a sceptic.” “Never! Scepticism is the beginning of faith.” “What are you?” “To define is to limit.” “Give me a clue.” “Threads snap. You would lose your way in the labyrinth.” "},
  {
    slug: "softness-of-proofs",
    date: "2026.06.18",
    kind: "essay",
    title: "on the unreasonable softness of proofs",
    epigraph: "a proof is supposed to be a hard object. it is cloth.",
    theme: "on shape",
    body: `a proof is supposed to be a hard object. you push against it; it pushes back with the full weight of necessity. and yet, the longer i spend among them, the more they feel like cloth — woven, foldable, occasionally damp.

consider the way a proof of the irrationality of √2 survives translation. you can tell it in greek, in symbols, in a child's sentence. each version is the same proof, and each version is different. the necessity lives somewhere underneath all of them, the way a body lives under its clothes.

i used to think mathematicians were carving statues out of marble. now i think they are folding origami in the dark, and what we publish is only the unfolded crease pattern. the actual mathematics is the gesture of the hands.

this is not a complaint. softness is not weakness. a fishing net is soft and catches fish; a marble net would catch nothing. the proof works because it can be lifted and carried by someone smaller than itself.

the field has a private vocabulary for this softness — we say a proof is "elegant," or "natural," or that it "explains" rather than "verifies." these are aesthetic words pretending to be technical. we should let them be aesthetic. the alternative is to keep pretending that mathematics is a kind of accounting, which it has never been, and which would be a great loss if it were.

later: i read this back and worry it sounds mystical. it isn't. it's just that the part of mathematics i love is the part that has fingers.`,
    interludes: [
      { afterParagraph: 1, from: "sampler", to: "spiral" },
      { afterParagraph: 3, from: "spiral", to: "orbital" },
    ],
  },
  {
    slug: "seventeen-things",
    date: "2026.06.11",
    kind: "list",
    title: "seventeen things i don't believe about time",
    epigraph: "that it flows. that the rate is measured in time.",
    theme: "on time",
    body: `- that it flows
- that it flows at a rate
- that the rate is measured in time
- that yesterday is behind me
- that tomorrow is ahead of me
- that the present is a knife-edge
- that the present has any thickness at all
- that clocks measure it
- that clocks measure anything except other clocks
- that the universe has an age
- that the universe could have an age without a witness
- that entropy is its arrow
- that entropy is anything except a story about counting
- that memory recovers it
- that memory invents it
- that any of this is a problem
- that any of this is not`,
  },
  {
    slug: "fragment-tiny-stories",
    date: "2026.06.04",
    kind: "fragment",
    title: "the universe is not made of atoms",
    epigraph: "it is made of tiny stories, and the atoms are what the stories are about.",
    theme: "on devotion",
    body: `the universe is not made of atoms. it is made of tiny stories, and the atoms are what the stories are about.`,
  },
  {
    slug: "marginalia-cassirer",
    date: "2026.05.28",
    kind: "marginalia",
    title: "marginalia on cassirer",
    epigraph: "one tablecloth pulled out from under a smaller tablecloth.",
    theme: "on shape",
    body: `(in the margin of *Substance and Function*, p.147)

cassirer wants to replace the concept of substance with the concept of function. the thing is not what it is; the thing is what it does in relation to other things.

but a function needs a domain. and a domain is a collection of things. so we have not escaped substance — we have only moved it one level down, like a tablecloth pulled out from under a smaller tablecloth.

still. it's the right direction.`,
  },
  {
    slug: "objects-secretly-the-same",
    date: "2026.05.20",
    kind: "list",
    title: "a list of objects that are secretly the same object",
    epigraph: "a coffee cup, a doughnut, a sentence, the silence after it.",
    theme: "on shape",
    body: `- a sentence and the silence after it
- a proof by contradiction and a proof by exhaustion (if you wait long enough)
- a wave and the surface it travels on
- the question and the questioner
- a measurement and a disturbance
- the number 1 and the act of pointing`,
  },
  {
    slug: "note-on-noise",
    date: "2026.05.12",
    kind: "note",
    title: "a note on noise",
    epigraph: "noise is signal you have not yet learned to read.",
    theme: "on numbers",
    body: `noise is not the absence of signal. noise is signal you have not yet learned to read.

every era inherits the previous era's noise as its new signal: planetary perturbations, cosmic background, the static in old recordings now studied as ambient music. the line moves.

a useful exercise: take any noisy phenomenon in your life and ask what would have to be true for it to be signal. usually the answer is small, and usually the answer is already true.`,
  },
  {
    slug: "fragment-coastline",
    date: "2026.05.03",
    kind: "fragment",
    title: "coastline",
    epigraph: "no length. only a method of measurement, and a confession.",
    theme: "on shape",
    body: `a coastline has no length. it has a method of measurement, and a confession.`,
  },
  {
    slug: "essay-strange-loops",
    date: "2026.04.22",
    kind: "essay",
    title: "small strange loops in ordinary life",
    epigraph: "the load-bearing walls of ordinary life.",
    theme: "on devotion",
    body: `hofstadter named the strange loop and then walked away with the big ones — gödel, escher, bach. but the small ones are everywhere, unattended.

a recipe for tomato sauce that calls for "a sauce-pot's worth of tomatoes" — the pot defines the quantity, the quantity defines the pot. neither is prior. the recipe is a small strange loop and the dinner is its fixed point.

a friendship that exists because you both believe it exists. the belief is the substance; the substance is the belief. you can topple it by examining it too closely, like a man trying to watch himself fall asleep.

the dictionary, which defines every word using other words it has already defined or will define. the whole thing is held up by nothing — by the agreement that it is held up. this is true of all of language and also of most of finance.

once you start noticing them you cannot stop. the loops are the load-bearing walls of ordinary life. we walk through them daily and call it walking through rooms.`,
    interludes: [{ afterParagraph: 2, from: "orbital", to: "sampler" }],
  },
  {
    slug: "list-questions-i-cant-ask",
    date: "2026.21.06",
    kind: "list",
    title: "questions i can't ask in physics class",
    theme: "on devotion",
    body: `- but where is the wavefunction
- but what is a field made of
- but what is the field a field of
- but is this all there is
- but is this all there is
- but is this all there is`,
  },
  {
    slug: "marginalia-borges",
    date: "2026.04.01",
    kind: "marginalia",
    title: "marginalia on borges, the library",
    epigraph: "the ratio of truth to noise is essentially zero. we read it as wisdom.",
    theme: "on numbers",
    body: `borges' library contains every possible book. so it also contains every wrong book, every almost-right book, every book that is right by accident.

the librarians despair because the ratio of truth to noise is essentially zero. but this is also the situation of the human brain.`,
  },
  {
    slug: "note-on-categories",
    date: "2026.03.19",
    kind: "note",
    title: "a note on category theory, gently",
    epigraph: "the study of what survives translation.",
    theme: "on shape",
    body: `category theory is the study of *what survives translation*. an arrow is the smallest object that survives. a functor is what survives across whole languages.

this is why it feels mystical to people who have not done it, and why it feels obvious to people who have. the mysticism and the obviousness are the same thing seen from different sides of a window.`,
  },
  {
    slug: "fragment-mirror",
    date: "2026.03.05",
    kind: "fragment",
    title: "mirror",
    epigraph: "a mirror reverses front and back. you do the rest in your head.",
    theme: "on shape",
    body: `a mirror does not reverse left and right. a mirror reverses front and back. you do the rest in your head, and you have been doing it your whole life, and you have never noticed.`,
  },
];

// =============================================
// FOLIO NUMBERS 
// =============================================

const ARABIC_INDIC = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];

function folio(slug) {
  const i = ENTRIES.findIndex(e => e.slug === slug);
  if (i < 0) return "";
  return String(i + 1).padStart(2, "0").split("").map(d => ARABIC_INDIC[+d]).join("");
}

function getEntry(slug) { return ENTRIES.find(e => e.slug === slug); }

// =============================================
// ASCII ENGINE (faithful port from ascii.ts)
// =============================================

function hash(x, y, seed = 1) {
  let h = (x * 374761393 + y * 668265263 + seed * 2147483647) | 0;
  h = (h ^ (h >>> 13)) * 1274126177;
  h = h ^ (h >>> 16);
  return ((h >>> 0) % 10000) / 10000;
}

const BLANK = " ";

function genSampler(W, H) {
  const g = Array.from({length: H}, () => Array(W).fill(BLANK));
  const cx = (W-1)/2, cy = (H-1)/2;
  for (let y=0; y<H; y++) for (let x=0; x<W; x++) {
    const dx=x-cx, dy=(y-cy)*2.1;
    const r=Math.sqrt(dx*dx+dy*dy), a=Math.atan2(dy,dx);
    if (y===0||y===H-1||x===0||x===W-1){ g[y][x]=(x+y)%2===0?"+":"·"; continue; }
    if (y===2||y===H-3||x===3||x===W-4){ g[y][x]=(x+y)%2===0?"×":BLANK; continue; }
    const petals=Math.cos(a*4);
    if (r<5&&r>1.5&&petals>0.2) g[y][x]="×";
    else if (r<1.2) g[y][x]="+";
    else if (r<12&&r>6){const h=hash(x,y,7);if(h<0.08)g[y][x]="×";else if(h<0.14)g[y][x]="+";}
  }
  return g;
}

function genSpiral(W, H) {
  const g = Array.from({length: H}, () => Array(W).fill(BLANK));
  const cx=(W-1)/2, cy=(H-1)/2;
  const phi=(1+Math.sqrt(5))/2, b=Math.log(phi)/(Math.PI/2);
  for (let i=0; i<4000; i++) {
    const t=(i/4000)*Math.PI*7, r=0.5*Math.exp(b*t);
    const x=Math.round(cx+r*Math.cos(t)), y=Math.round(cy+(r*Math.sin(t))/2.1);
    if (x<0||x>=W||y<0||y>=H) continue;
    const depth=Math.min(3,Math.floor(r/6));
    g[y][x]=["·","∘","○","●"][depth];
  }
  g[Math.round(cy)][Math.round(cx)]="●";
  return g;
}

function genOrbital(W, H) {
  const g = Array.from({length: H}, () => Array(W).fill(BLANK));
  const cx=(W-1)/2, cy=(H-1)/2;
  const orbits=[
    {a:W*0.42,b:H*0.42,rot:0},
    {a:W*0.38,b:H*0.4, rot:Math.PI/3},
    {a:W*0.4, b:H*0.38,rot:(2*Math.PI)/3},
  ];
  for (const o of orbits) {
    for (let t=0; t<Math.PI*2; t+=0.01) {
      const ex=o.a*Math.cos(t), ey=o.b*Math.sin(t)*0.5;
      const rx=ex*Math.cos(o.rot)-ey*Math.sin(o.rot);
      const ry=ex*Math.sin(o.rot)+ey*Math.cos(o.rot);
      const x=Math.round(cx+rx), y=Math.round(cy+ry);
      if (x<0||x>=W||y<0||y>=H) continue;
      const sx=-o.a*Math.sin(t), sy=o.b*Math.cos(t)*0.5;
      const dxr=sx*Math.cos(o.rot)-sy*Math.sin(o.rot);
      const dyr=sx*Math.sin(o.rot)+sy*Math.cos(o.rot);
      const ang=Math.atan2(dyr,dxr), a=((ang+Math.PI*2)%Math.PI)/Math.PI;
      let ch="·";
      if (a<0.15||a>0.85) ch="_";
      else if (a<0.35) ch="\\";
      else if (a<0.65) ch="|";
      else ch="/";
      g[y][x]=ch;
    }
  }
  for (let dy=-1;dy<=1;dy++) for (let dx=-2;dx<=2;dx++) {
    const x=Math.round(cx)+dx, y=Math.round(cy)+dy;
    if (x>=0&&x<W&&y>=0&&y<H&&Math.abs(dx)+Math.abs(dy)<3)
      g[y][x]=(dx+dy)%2===0?"+":"·";
  }
  return g;
}

function generate(state, W, H) {
  if (state==="sampler") return genSampler(W,H);
  if (state==="spiral")  return genSpiral(W,H);
  return genOrbital(W,H);
}

function interpolate(from, to, W, H, progress, seed=1, time=0) {
  const tweenGlyphs=["·","˙","‚","˚","•","∘"];
  const twinkleRate=0.06, tBucket=Math.floor(time*6);
  const rows=[];
  for (let y=0;y<H;y++) {
    let line="";
    for (let x=0;x<W;x++) {
      const threshold=hash(x,y,seed);
      let ch;
      if (progress>=threshold) ch=to[y][x];
      else if (progress>=threshold-0.08) ch=tweenGlyphs[Math.floor(hash(x,y,seed+11)*tweenGlyphs.length)];
      else ch=from[y][x];
      if (ch!==" ") {
        const tw=hash(x,y,tBucket+31);
        if (tw<twinkleRate) ch=tweenGlyphs[Math.floor(hash(x,y,tBucket+97)*tweenGlyphs.length)];
      }
      line+=ch;
    }
    rows.push(line);
  }
  return rows.join("\n");
}

// =============================================
// ASCII HERO (homepage, continuous morph)
// =============================================

function mountAsciiHero(preEl, width=72, height=18, period=5.5) {
  const states=["sampler","spiral","orbital"];
  const frames={};
  for (const s of states) frames[s]=generate(s,width,height);

  let rafId=null, startT=null;
  const total=states.length*period;

  function tick(t) {
    if (!startT) startT=t;
    const tSec=(t-startT)/1000;
    const elapsed=tSec%total;
    const idx=Math.floor(elapsed/period);
    const within=elapsed-idx*period;
    const from=states[idx], to=states[(idx+1)%states.length];
    const raw=within/period, progress=raw*raw*(3-2*raw);
    preEl.textContent=interpolate(frames[from],frames[to],width,height,progress,idx+1,tSec);
    rafId=requestAnimationFrame(tick);
  }
  // first frame immediately
  preEl.textContent=frames[states[0]].map(r=>r.join("")).join("\n");
  rafId=requestAnimationFrame(tick);
  return ()=>{ if(rafId) cancelAnimationFrame(rafId); };
}

// =============================================
// SCROLL INTERLUDE (notes page)
// =============================================

function mountScrollInterlude(wrapEl, fromState, toState, width=56, height=18) {
  const preEl=wrapEl.querySelector("pre");
  if (!preEl) return;
  const f={from:generate(fromState,width,height), to:generate(toState,width,height)};
  const seed=fromState.length+toState.length;

  preEl.textContent=interpolate(f.from,f.to,width,height,0,seed);

  let raf=0;
  function onScroll() {
    if (raf) return;
    raf=requestAnimationFrame(()=>{
      raf=0;
      const rect=wrapEl.getBoundingClientRect();
      const vh=window.innerHeight;
      const p=1-Math.max(0,Math.min(1,(rect.top+rect.height/2)/vh));
      preEl.textContent=interpolate(f.from,f.to,width,height,p,seed);
    });
  }
  onScroll();
  window.addEventListener("scroll",onScroll,{passive:true});
  window.addEventListener("resize",onScroll);
}

// =============================================
// THRESHOLD
// =============================================

function mountThreshold() {
  if (sessionStorage.getItem("threshold_seen")==="1") return;
  const el=document.getElementById("threshold");
  if (!el) return;
  el.style.display="";
  el.querySelector(".threshold-word").addEventListener("click",()=>{
    el.classList.add("leaving");
    try { sessionStorage.setItem("threshold_seen","1"); } catch{}
    setTimeout(()=>el.remove(), 700);
  });
}

// =============================================
// BODY RENDERER — turns plain text into HTML
// =============================================

function renderBody(text, interludes=[]) {
  // Split on blank lines
  const rawParagraphs = text.split(/\n\n+/);
  const interludeMap = {};
  for (const il of (interludes||[])) interludeMap[il.afterParagraph]=il;

  let html="";
  rawParagraphs.forEach((para, i) => {
    const trimmed=para.trim();
    if (!trimmed) return;

    // bullet list?
    if (trimmed.startsWith("- ")) {
      const items=trimmed.split("\n").map(l=>l.replace(/^-\s*/,""));
      html+=`<ul>${items.map(it=>`<li>${inlineMarkdown(it)}</li>`).join("")}</ul>`;
    } else {
      // preserve single newlines within a paragraph as <br> for lists/marginalia
      const lines=trimmed.split("\n");
      if (lines.length>1 && !trimmed.startsWith("-")) {
        html+=`<p>${lines.map(inlineMarkdown).join("<br>")}</p>`;
      } else {
        html+=`<p>${inlineMarkdown(trimmed)}</p>`;
      }
    }

    // interlude after this paragraph (1-indexed)
    if (interludeMap[i+1]) {
      const il=interludeMap[i+1];
      html+=`<div class="scroll-interlude" data-from="${il.from}" data-to="${il.to}">
        <div class="scroll-interlude-sticky">
          <pre class="ascii ascii-sm"></pre>
          ${il.caption?`<div class="scroll-interlude-caption">— ${il.caption}</div>`:""}
        </div>
      </div>`;
    }
  });
  return html;
}

function inlineMarkdown(s) {
  // bold, italic, inline code
  return s
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>");
}

// =============================================
// SIGILS
// =============================================

const SIGILS = {
  essay:      `   +     +\n × · · · ×\n   ·   ·\n × · · · ×\n   +     +`,
  note:       `· · · · ·\n·       ·\n·   +   ·\n·       ·\n· · · · ·`,
  list:       `— — — — —\n— — — — —\n— — — — —`,
  fragment:   `      ·\n   ·     ·\n·     +     ·\n   ·     ·\n      ·`,
  marginalia: `|\n| ·\n| · ·\n| · · ·\n|`,
};

// =============================================
// PAGE ROUTERS
// =============================================

function initHome() {
  // Threshold
  mountThreshold();

  // INTRO-PARAAAAAAAA 
  const ci=document.getElementById("custom-intro");
  if(ci){ci.innerHTML=`<p><em>“What are you?” -- Oscar Wilde </em></p>
<p>I’m <a href="notes.html?slug=name-means">areeba</a> arbab, and I don't really know how to finish that sentence, so this is my workaround: <a href="notes.html?slug=fieldnotes-on-fieldnotes">fieldnotes</a> from a mind that refuses to be something. These are sediments of that thinking, including fragments, marginalia, some loose threads, glitches, lists that trail off… I don't know who I am, but I know what I pay attention <a href="notes.html?slug=simone-weil">(see simone weil)</a> to.</p>
<p>That’s either barely enough for now, or it might be everything.</p>
<p>Oscar Wilde said <em> “to define is to limit”, </em> but I conceptualise this <a href="colophon.html">site</a> as an extension of the <a href="notes.html?slug=the-oscar-wilde-quote">“clue”</a> in its seldom-remembered response.</p>
<p><em>“Threads snap. You would lose your way in the labyrinth.” -- ibidem </em></p> And:
<p><em>“In the end, we self-perceiving, self-inventing, locked-in mirages are little miracles of self-reference.” -- Douglas Hofstadter:</em></p>`;}

  // ASCII hero
  const pre = document.getElementById("ascii-hero");
  if (pre) mountAsciiHero(pre);

  // Cluster index
  const container = document.getElementById("clusters");
  if (container) {
let html='<ul class="idx-folio">';
for (const e of ENTRIES){html+=`<li><span class="num">${folio(e.slug)}</span><a href="notes.html?slug=${e.slug}">${e.title}</a></li>`;}
html+='</ul>'; container.innerHTML=html;
  }

  // Intro CTA link
  const ctaEl=document.getElementById("intro-cta");
  if (ctaEl && ENTRIES[0]) ctaEl.href=`notes.html?slug=${ENTRIES[0].slug}`;
}

function initNotes() {
  const params=new URLSearchParams(location.search);
  const slug=params.get("slug");
  const entry=getEntry(slug);

  // 404
  if (!entry) {
    document.title="not found — fieldnotes";
    document.getElementById("notes-content").innerHTML=
      `<p class="muted">no such entry.</p><p class="mt-4"><a href="index.html">← fieldnotes</a></p>`;
    return;
  }

  document.title=`${entry.title} — fieldnotes`;

  // Sigil
  const sigilEl=document.getElementById("notes-sigil");
  if (sigilEl && SIGILS[entry.kind]) sigilEl.textContent=SIGILS[entry.kind];

  // Meta
  const kindEl=document.getElementById("notes-kind");
  if (kindEl) kindEl.textContent="";

  const titleEl=document.getElementById("notes-title");
  if (titleEl) titleEl.textContent=entry.title;

  // Body
  const bodyEl=document.getElementById("notes-body");
  if (bodyEl) {
    bodyEl.innerHTML=renderBody(entry.body, entry.interludes);
    // Mount scroll interludes
    bodyEl.querySelectorAll(".scroll-interlude").forEach(el=>{
      mountScrollInterlude(el, el.dataset.from, el.dataset.to);
    });
  }

  // Adjacent + prev/next
  const i=ENTRIES.findIndex(e=>e.slug===slug);
  const prev=i>0?ENTRIES[i-1]:null;
  const next=i<ENTRIES.length-1?ENTRIES[i+1]:null;
  const adj=ENTRIES.filter(e=>e.kind===entry.kind&&e.slug!==slug).slice(0,3);

  const navEl=document.getElementById("notes-nav");
  if (navEl) {
    let navHtml="";
    if (adj.length) {
      navHtml+=`<p class="entry-nav-label muted">further wandering →</p><ul class="idx-folio">`;
      for (const e of adj)
        navHtml+=`<li><span class="num">${folio(e.slug)}</span><a href="notes.html?slug=${e.slug}">${e.title}</a></li>`;
      navHtml+=`</ul>`;
    }
    if (prev||next) {
      navHtml+=`<div style="margin-top:2rem;display:flex;gap:2rem;font-size:0.9em;">`;
      if (prev) navHtml+=`<a href="notes.html?slug=${prev.slug}">← ${prev.title}</a>`;
      if (next) navHtml+=`<a href="notes.html?slug=${next.slug}" style="margin-left:auto">${next.title} →</a>`;
      navHtml+=`</div>`;
    }
    navEl.innerHTML=navHtml;
  }
}

// =============================================
// BOOT
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (page==="home")   initHome();
  if (page==="notes")  initNotes();
  // colophon needs no JS
});

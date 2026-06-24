document.documentElement.classList.add("js");(function(){const o=document.getElementById("neural");if(!o)return;const e=o.getContext("webgl2");if(!e){o.remove();return}const r=`#version 300 es
      in vec2 a_pos;
      void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
    `,i=`#version 300 es
      precision highp float;

      uniform float u_time;
      uniform vec2  u_res;
      uniform vec2  u_mouse;

      out vec4 fragColor;

      // ── Hashes ─────────────────────────────────────────────
      float h1(float n) { return fract(sin(n) * 43758.5453123); }
      float h1v(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

      // ── Signed distance: line segment ──────────────────────
      float sdSeg(vec2 p, vec2 a, vec2 b) {
        vec2 pa = p - a, ba = b - a;
        float t = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
        return length(pa - ba * t);
      }

      void main() {
        vec2 fc  = gl_FragCoord.xy;
        vec2 uv  = fc / u_res;
        float ar = u_res.x / u_res.y;
        vec2 p   = vec2(uv.x * ar, uv.y); // aspect-correct space

        float t = u_time;

        // ── Node positions (animated drift) ──────────────────
        const int N = 24;
        vec2  nd[24];
        float pulse[24];

        for (int i = 0; i < N; i++) {
          float fi = float(i);
          float px = h1(fi * 1.618  + 0.1) * ar;
          float py = h1(fi * 2.7183 + 0.9);
          float ph = h1(fi + 3.14)  * 6.2832;
          float sp = 0.18 + h1(fi + 7.0) * 0.45;
          nd[i] = vec2(px, py) + vec2(
            sin(t * sp + ph)        * 0.045,
            cos(t * sp * 0.7 + ph) * 0.028
          );
          pulse[i] = 0.5 + 0.5 * sin(t * (1.0 + h1(fi) * 2.0) + ph);
        }

        // ── Background ───────────────────────────────────────
        vec3 col = vec3(0.022, 0.038, 0.078);

        // Mouse warmth
        vec2 mo = vec2(u_mouse.x * ar, u_mouse.y);
        col += vec3(0.0, 0.045, 0.11) * smoothstep(0.65, 0.0, length(p - mo));

        // Subtle dot grid
        float gs = 0.065;
        vec2 gp  = fract(p / gs) - 0.5;
        col += vec3(0.0, 0.35, 0.35) * smoothstep(0.12, 0.02, length(gp)) * 0.08;

        // ── Edges ────────────────────────────────────────────
        float edgeAccum = 0.0;
        float edgeThresh = 0.30;

        for (int i = 0; i < N; i++) {
          for (int j = i + 1; j < N; j++) {
            float d = length(nd[i] - nd[j]);
            if (d < edgeThresh) {
              float fade = 1.0 - d / edgeThresh;

              // Edge glow
              float sdf = sdSeg(p, nd[i], nd[j]);
              edgeAccum += smoothstep(0.0035, 0.0, sdf) * fade * fade * 0.9;

              // Data pulse travelling along edge
              float off = h1(float(i * 31 + j));
              float flo = fract(t * 0.35 + off);
              vec2 ppt  = mix(nd[i], nd[j], flo);
              edgeAccum += smoothstep(0.012, 0.0, length(p - ppt)) * fade * 0.55;
            }
          }
        }

        // ── Nodes ────────────────────────────────────────────
        float nodeAccum = 0.0;

        for (int i = 0; i < N; i++) {
          float d  = length(p - nd[i]);
          float pu = pulse[i];
          nodeAccum += smoothstep(0.013, 0.0, d) * pu;          // core
          nodeAccum += smoothstep(0.048, 0.006, d) * pu * 0.32; // halo
        }

        // ── Compose ──────────────────────────────────────────
        vec3 teal = vec3(0.0, 0.898, 0.831);
        col += teal * edgeAccum * 0.6;
        col += mix(teal, vec3(1.0), clamp(nodeAccum - 0.5, 0.0, 1.0))
               * nodeAccum * 1.15;

        // ── Vignette ─────────────────────────────────────────
        col *= 1.0 - smoothstep(0.28, 1.05, length(uv - 0.5));

        // ── CRT scanlines (5% opacity) ────────────────────────
        col *= 1.0 - sin(fc.y) * 0.5 * 0.05;

        // ── Film grain ───────────────────────────────────────
        col += (h1v(uv + t * 0.007) * 2.0 - 1.0) * 0.018;

        fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
      }
    `;function l(n,u){const c=e.createShader(n);return e.shaderSource(c,u),e.compileShader(c),e.getShaderParameter(c,e.COMPILE_STATUS)?c:(console.warn("[neural]",e.getShaderInfoLog(c)),null)}const m=l(e.VERTEX_SHADER,r),p=l(e.FRAGMENT_SHADER,i);if(!m||!p)return;const t=e.createProgram();if(e.attachShader(t,m),e.attachShader(t,p),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS)){console.warn("[neural] link:",e.getProgramInfoLog(t));return}const g=e.createVertexArray();e.bindVertexArray(g);const S=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,S),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW);const h=e.getAttribLocation(t,"a_pos");e.enableVertexAttribArray(h),e.vertexAttribPointer(h,2,e.FLOAT,!1,0,0),e.bindVertexArray(null),e.useProgram(t);const w=e.getUniformLocation(t,"u_time"),v=e.getUniformLocation(t,"u_res"),E=e.getUniformLocation(t,"u_mouse");let a=0,s=0,A=.5,b=.5,d=.5,f=.5;function x(){const n=Math.min(devicePixelRatio,window.innerWidth<640?1.5:2);a=Math.round(innerWidth*n),s=Math.round(innerHeight*n),o.width=a,o.height=s,e.viewport(0,0,a,s),e.uniform2f(v,a,s)}window.addEventListener("resize",x,{passive:!0}),x(),window.addEventListener("mousemove",n=>{A=n.clientX/innerWidth,b=1-n.clientY/innerHeight},{passive:!0});let y=0;window.addEventListener("scroll",()=>{y=window.scrollY},{passive:!0});function _(n){requestAnimationFrame(_),d+=(A-d)*.045,f+=(b-f)*.045,e.useProgram(t),e.uniform1f(w,n*.001),e.uniform2f(E,d,f),e.uniform2f(v,a,s),e.bindVertexArray(g),e.drawArrays(e.TRIANGLE_STRIP,0,4),e.bindVertexArray(null);const u=Math.max(0,1-y/(innerHeight*.65));o.style.opacity=String(u.toFixed(3))}requestAnimationFrame(_)})();(function(){const o=document.querySelectorAll(".reveal");if(typeof IntersectionObserver>"u"){o.forEach(r=>r.classList.add("is-visible"));return}const e=new IntersectionObserver(r=>{r.forEach(i=>{if(i.isIntersecting){const l=i.target.closest(".c-cards")?Array.from(i.target.parentElement.children).indexOf(i.target)*80:0;setTimeout(()=>i.target.classList.add("is-visible"),l),e.unobserve(i.target)}})},{threshold:.12,rootMargin:"0px 0px -48px 0px"});o.forEach(r=>e.observe(r)),window.setTimeout(()=>{o.forEach(r=>{r.classList.contains("is-visible")||r.classList.add("is-visible")})},2e3)})();

import type { L, Locale } from '@/content/types';

interface Node {
  title: L;
  detail?: L;
  /** Machine steps are left unmarked; a check and a teacher decision are not. */
  tone?: 'check' | 'teacher';
}

interface Props {
  alt: L;
  online: Node[];
  offline: Node[];
  bandLabels: { online: L; offline: L };
  edgeLabels: { corrections: L; rules: L; repair: L };
  locale: Locale;
}

/**
 * The two loops, drawn as one circuit.
 *
 * The online band runs left to right and the offline band runs right to left, so
 * the two long connectors close the circuit the way the report draws it: a
 * correction leaves the teacher's decision, and an accepted rule comes back into
 * prompt assembly.
 *
 * Drawn in the site's own terms rather than the thesis palette: hairlines, flat
 * fills, `--slate-wash` for a check and `--accent-wash` for the two places a
 * teacher decides, and no other colour. Every fill is a CSS variable, so the
 * dark theme needs no second version.
 *
 * Content contract, since the connectors have to start and end somewhere
 * specific: the online band carries one node toned `check` and one toned
 * `teacher`, with generation immediately before the check and prompt assembly
 * second; the offline band is written in work order [ log, …, accepted ] and
 * drawn right to left.
 */

const W = 860;
const M = 14;
const GAP = 16;
const NODE_H = 58;
const ONLINE_Y = 52;
const OFFLINE_Y = 242;
/** The two cross-band runs sit at different heights so they cannot overlap. */
const CORRECTIONS_Y = 168;
const RULES_Y = 188;

/**
 * Evenly place `count` nodes across the band. With `reverse`, index 0 sits at
 * the right edge, which is how the offline band runs: its first step is the one
 * the teacher's decision produces.
 */
function layout(count: number, y: number, reverse = false) {
  const usable = W - M * 2;
  const width = (usable - GAP * (count - 1)) / count;
  return Array.from({ length: count }, (_, i) => {
    const x = reverse ? W - M - width - i * (width + GAP) : M + i * (width + GAP);
    return { x, w: width, cx: x + width / 2, y };
  });
}

function textAnchorY(y: number, hasDetail: boolean) {
  return hasDetail ? y + 24 : y + 34;
}

function Band({
  label,
  nodes,
  boxes,
  locale,
}: {
  label: L;
  nodes: Node[];
  boxes: ReturnType<typeof layout>;
  locale: Locale;
}) {
  return (
    <>
      <text
        x={M}
        y={boxes[0].y - 24}
        className="font-mono fill-muted text-[11.5px] tracking-[0.12em] uppercase"
      >
        {label[locale]}
      </text>
      {nodes.map((node, i) => {
        const box = boxes[i];
        const fill =
          node.tone === 'teacher'
            ? 'fill-accent-wash'
            : node.tone === 'check'
              ? 'fill-slate-wash'
              : 'fill-paper-raised';
        const stroke =
          node.tone === 'teacher'
            ? 'stroke-accent'
            : node.tone === 'check'
              ? 'stroke-slate'
              : 'stroke-rule-strong';

        return (
          <g key={node.title.en}>
            <rect
              x={box.x}
              y={box.y}
              width={box.w}
              height={NODE_H}
              rx={3}
              vectorEffect="non-scaling-stroke"
              strokeWidth={1}
              className={`${fill} ${stroke}`}
            />
            <text
              x={box.cx}
              y={textAnchorY(box.y, Boolean(node.detail))}
              textAnchor="middle"
              className="fill-ink text-[15px]"
            >
              {node.title[locale]}
            </text>
            {node.detail ? (
              <text x={box.cx} y={box.y + 42} textAnchor="middle" className="fill-muted text-[12.5px]">
                {node.detail[locale]}
              </text>
            ) : null}
          </g>
        );
      })}
    </>
  );
}

export function LoopDiagram({ alt, online, offline, bandLabels, edgeLabels, locale }: Props) {
  const top = layout(online.length, ONLINE_Y);
  const bottom = layout(offline.length, OFFLINE_Y, true);
  const mid = NODE_H / 2;

  const teacherIdx = online.findIndex((n) => n.tone === 'teacher');
  const checksIdx = online.findIndex((n) => n.tone === 'check');
  const teacher = top[Math.max(0, teacherIdx)];
  const checks = top[Math.max(0, checksIdx)];
  const generate = top[Math.max(0, checksIdx - 1)];
  const assembly = top[1] ?? top[0];
  const log = bottom[0];
  const accepted = bottom[bottom.length - 1];

  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${W} 336`}
        width="100%"
        style={{ minWidth: 620 }}
        role="img"
        aria-label={alt[locale]}
        className="h-auto font-sans"
      >
        <defs>
          <marker id="pc-flow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" className="fill-rule-strong" />
          </marker>
          <marker id="pc-loop" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" className="fill-accent" />
          </marker>
        </defs>

        <rect
          x={0}
          y={6}
          width={W}
          height={150}
          rx={4}
          className="fill-paper-sunk stroke-rule"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
        <rect
          x={0}
          y={196}
          width={W}
          height={130}
          rx={4}
          className="fill-paper-sunk stroke-rule"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />

        <Band label={bandLabels.online} nodes={online} boxes={top} locale={locale} />
        <Band label={bandLabels.offline} nodes={offline} boxes={bottom} locale={locale} />

        {/* Left-to-right flow inside the online band. */}
        {top.slice(0, -1).map((box, i) => (
          <line
            key={`of-${online[i].title.en}`}
            x1={box.x + box.w + 2}
            y1={box.y + mid}
            x2={top[i + 1].x - 2}
            y2={top[i + 1].y + mid}
            markerEnd="url(#pc-flow)"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
            className="stroke-rule-strong"
          />
        ))}

        {/* Right-to-left flow inside the offline band. The band is laid out in
            reverse, so the next node is the one to the left. */}
        {bottom.slice(0, -1).map((box, i) => (
          <line
            key={`ff-${offline[i].title.en}`}
            x1={box.x - 2}
            y1={box.y + mid}
            x2={bottom[i + 1].x + bottom[i + 1].w + 2}
            y2={bottom[i + 1].y + mid}
            markerEnd="url(#pc-flow)"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
            className="stroke-rule-strong"
          />
        ))}

        {/* Bounded repair: the checks send a draft back to generation. */}
        <path
          d={`M ${checks.cx} ${ONLINE_Y + NODE_H} V 132 H ${generate.cx} V ${ONLINE_Y + NODE_H + 2}`}
          fill="none"
          markerEnd="url(#pc-flow)"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
          className="stroke-rule-strong"
        />
        <text x={(checks.cx + generate.cx) / 2} y={126} textAnchor="middle" className="fill-muted text-[12.5px]">
          {edgeLabels.repair[locale]}
        </text>

        {/* The two connectors that close the circuit. Each one leaves or joins a
            card on the same side, so the run between them reads as one line. */}
        <path
          d={`M ${teacher.cx} ${ONLINE_Y + NODE_H} V ${CORRECTIONS_Y} H ${log.cx} V ${OFFLINE_Y - 2}`}
          fill="none"
          markerEnd="url(#pc-loop)"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
          className="stroke-accent"
        />
        <text
          x={teacher.cx - 8}
          y={CORRECTIONS_Y - 6}
          textAnchor="end"
          className="fill-accent text-[12.5px]"
        >
          {edgeLabels.corrections[locale]}
        </text>

        <path
          d={`M ${accepted.cx} ${OFFLINE_Y} V ${RULES_Y} H ${assembly.cx} V ${ONLINE_Y + NODE_H + 2}`}
          fill="none"
          markerEnd="url(#pc-loop)"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
          className="stroke-accent"
        />
        <text
          x={(accepted.cx + assembly.cx) / 2}
          y={RULES_Y - 6}
          textAnchor="middle"
          className="fill-accent text-[12.5px]"
        >
          {edgeLabels.rules[locale]}
        </text>
      </svg>
    </div>
  );
}

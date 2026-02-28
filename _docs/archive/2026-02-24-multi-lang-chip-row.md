# Multi-Language Chip Row Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the stacked per-language inputs in T5-activity-editor.html with a compact chip-row component that scales to 8+ languages, with auto-translate support.

**Architecture:** A reusable `addChipRowField()` function replaces `addLangField()`/`addLangTextarea()`. Each translatable field shows a Kurdish source input + a row of clickable language chips. Chips expand inline on click to reveal editable inputs. A mock translation API simulates the "Translate all" feature for the prototype.

**Tech Stack:** Vanilla HTML/CSS/JS (static prototype). Languages sourced from `HK.LANGUAGES` (theme.js). No backend — translation is mocked with a timeout + copy for now.

---

### Task 1: Add language colors to theme config

**Files:**
- Modify: `mockup/shared/theme.js:38-48` (LANGUAGES array)

**Step 1: Add color property to each language in LANGUAGES array**

The existing array has `{ code, label, dir? }`. Add a `color` property for chip styling:

```javascript
var LANGUAGES = [
    { code: 'ku', label: 'Kurd\u00ee', color: '#2D5A3D' },
    { code: 'en', label: 'English', color: '#3B7A8A' },
    { code: 'de', label: 'Deutsch', color: '#9A6530' },
    { code: 'sv', label: 'Svenska', color: '#4A7A9B' },
    { code: 'da', label: 'Dansk', color: '#6B5B8A' },
    { code: 'it', label: 'Italiano', color: '#7A4A3B' },
    { code: 'tr', label: 'T\u00fcrk\u00e7e', color: '#C75B5B' },
    { code: 'fa', label: '\u0641\u0627\u0631\u0633\u06CC', dir: 'rtl', color: '#5BA37B' },
    { code: 'ar', label: '\u0627\u0644\u0639\u0631\u0628\u064A\u0629', dir: 'rtl', color: '#7B68AE' }
];
```

**Step 2: Verify in browser**

Open any page that loads `theme.js`, check console: `console.log(HK.LANGUAGES[1].color)` should return `'#3B7A8A'`.

**Step 3: Commit**

```bash
git add mockup/shared/theme.js
git commit -m "feat: add color property to LANGUAGES config for chip-row styling"
```

---

### Task 2: Add chip-row CSS to T5-activity-editor.html

**Files:**
- Modify: `mockup/T5-activity-editor.html` (CSS section, lines ~445-461)

**Step 1: Replace the existing MULTI-LANG FIELD CSS block**

Find the block starting at `/* MULTI-LANG FIELD — stacked per-language inputs */` (lines 445-461) and replace with chip-row styles. Keep `.lang-tag` base styles but add new chip-row classes.

```css
/* ============================================
   MULTI-LANG CHIP ROW — compact language selector
   ============================================ */
/* Container for the chip row */
.chip-row { display: flex; align-items: center; gap: 6px; margin-top: 6px; flex-wrap: wrap; }
.chip-row-icon { font-size: 14px; opacity: 0.6; flex-shrink: 0; cursor: default; title: 'Translations'; }

/* Individual language chip */
.lang-chip {
  display: inline-flex; align-items: center; gap: 3px;
  padding: 3px 8px; border-radius: 12px;
  font-size: 10px; font-weight: 700; text-transform: uppercase;
  border: 1.5px solid var(--border); background-color: transparent;
  cursor: pointer; transition: all 0.2s ease; user-select: none;
  color: var(--text-secondary);
}
.lang-chip:hover { border-color: var(--text-primary); background-color: var(--bg-surface); }
.lang-chip.active { border-width: 2px; }

/* Chip status indicators */
.lang-chip .chip-status { font-size: 8px; line-height: 1; }
.lang-chip.filled .chip-status { opacity: 1; }
.lang-chip.empty .chip-status { opacity: 0.4; }
.lang-chip.auto .chip-status { opacity: 1; }

/* Overflow chip (+N more) */
.lang-chip-overflow {
  display: inline-flex; align-items: center;
  padding: 3px 8px; border-radius: 12px;
  font-size: 10px; font-weight: 600;
  border: 1.5px dashed var(--border); background-color: transparent;
  cursor: pointer; transition: all 0.2s ease; color: var(--text-secondary);
}
.lang-chip-overflow:hover { border-color: var(--text-primary); }

/* Expanded input area below chip row */
.chip-expand-area { display: flex; flex-direction: column; gap: 4px; margin-top: 6px; }

.chip-expand-row {
  display: flex; align-items: center; gap: 6px;
  padding: 6px 8px; border-radius: var(--radius-sm);
  background-color: var(--bg-surface); border: 1px solid var(--border);
  animation: fadeInUp 0.2s ease-out both;
}
.chip-expand-row .lang-tag {
  display: inline-flex; align-items: center; justify-content: center;
  width: 28px; height: 28px; flex-shrink: 0;
  font-size: 10px; font-weight: 700; text-transform: uppercase;
  border-radius: var(--radius-xs); background-color: var(--bg-page);
  border: 1px solid var(--border); color: var(--text-secondary);
}
.chip-expand-row .form-input { flex: 1; }
.chip-expand-row .auto-badge {
  font-size: 10px; opacity: 0.7; flex-shrink: 0; padding: 2px 6px;
  border-radius: 8px; background-color: rgba(212, 168, 67, 0.15);
  color: var(--color-accent);
}
.chip-expand-close {
  background: none; border: none; cursor: pointer; padding: 2px;
  color: var(--text-secondary); font-size: 16px; line-height: 1;
  opacity: 0.6; transition: opacity 0.2s;
}
.chip-expand-close:hover { opacity: 1; color: var(--color-error); }

/* Translate-all button (per activity) */
.btn-translate-all {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 16px; border-radius: var(--radius-sm);
  border: 1.5px dashed var(--color-accent); background-color: rgba(212, 168, 67, 0.06);
  color: var(--color-accent); font-size: 13px; font-weight: 600;
  cursor: pointer; transition: all 0.2s ease; margin-top: 8px;
  font-family: var(--font-body);
}
.btn-translate-all:hover { background-color: rgba(212, 168, 67, 0.15); border-style: solid; }

/* Translate-all button (per lesson — larger, top of page) */
.btn-translate-lesson {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 10px 20px; border-radius: var(--radius-md);
  border: 2px dashed var(--color-accent); background-color: rgba(212, 168, 67, 0.06);
  color: var(--color-accent); font-size: 14px; font-weight: 600;
  cursor: pointer; transition: all 0.2s ease;
  font-family: var(--font-body);
}
.btn-translate-lesson:hover { background-color: rgba(212, 168, 67, 0.15); border-style: solid; }

/* Keep old .lang-tag base for backwards compat in other screens */
.lang-field-group { display: flex; flex-direction: column; gap: 4px; }
.lang-field-row { display: flex; align-items: center; gap: 6px; }
.lang-field-row .form-input { flex: 1; }
```

**Step 2: Verify in browser**

Open T5-activity-editor.html — the page should still render (old JS still uses old functions). No visual change yet.

**Step 3: Commit**

```bash
git add mockup/T5-activity-editor.html
git commit -m "feat: add chip-row CSS for multi-language translation UI"
```

---

### Task 3: Replace EDIT_LANGS and build chip-row JS functions

**Files:**
- Modify: `mockup/T5-activity-editor.html` (JS section, lines ~569-918)

**Step 1: Replace EDIT_LANGS with dynamic language list from HK.LANGUAGES**

Replace lines 569-572:
```javascript
var EDIT_LANGS = [
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' }
];
```

With:
```javascript
// Translation languages — all HK.LANGUAGES except 'ku' (Kurdish is source content)
var EDIT_LANGS = (window.HK && HK.LANGUAGES || []).filter(function (l) { return l.code !== 'ku'; });
// Max chips visible before "+N" overflow (show first 5)
var CHIP_MAX_VISIBLE = 5;
```

**Step 2: Add `addChipRowField` function — replaces `addLangField`**

Add this function AFTER the existing `addLangTextarea` (keep old functions for reference, mark deprecated). Insert after line 918:

```javascript
// ============================================================
// CHIP ROW — compact multi-lang field with expandable inputs
// ============================================================
function addChipRowField(parent, label, value, opts) {
    opts = opts || {};
    var isTextarea = opts.textarea === true;
    var g = el('div', { className: 'form-group' });
    g.appendChild(el('label', { className: 'form-label', textContent: label }));

    // Kurdish source input (always visible)
    if (opts.kuField !== false) {
        var kuVal = '';
        if (opts.kuValue !== undefined) {
            kuVal = opts.kuValue;
        }
        if (isTextarea) {
            g.appendChild(el('textarea', { className: 'form-input', rows: '2', textContent: kuVal, placeholder: 'Kurdî' }));
        } else {
            g.appendChild(el('input', { type: 'text', className: 'form-input', value: kuVal, placeholder: 'Kurdî' }));
        }
    }

    // Chip row container
    var row = el('div', { className: 'chip-row' });
    row.appendChild(el('span', { className: 'chip-row-icon', textContent: '🌐' }));

    // Expand area (below chips, for opened inputs)
    var expandArea = el('div', { className: 'chip-expand-area' });

    var overflowLangs = [];

    EDIT_LANGS.forEach(function (lang, idx) {
        var langVal = tLang(value, lang.code);
        var hasContent = langVal !== '';
        // For now, no _meta in JSON yet, so all existing content = human-written
        var isAuto = false;

        var statusChar = isAuto ? '✨' : (hasContent ? '●' : '○');
        var statusClass = isAuto ? 'auto' : (hasContent ? 'filled' : 'empty');

        // Chip element
        var chip = el('button', { className: 'lang-chip ' + statusClass });
        chip.style.color = lang.color || 'var(--text-secondary)';
        chip.style.borderColor = (lang.color || 'var(--border)');
        chip.appendChild(document.createTextNode(lang.code));
        chip.appendChild(el('span', { className: 'chip-status', textContent: statusChar }));

        // If beyond max visible, add to overflow
        if (idx >= CHIP_MAX_VISIBLE) {
            chip.style.display = 'none';
            overflowLangs.push(chip);
        }

        // Click handler — toggle expand
        (function (chipEl, langObj, langValue, auto) {
            chipEl.addEventListener('click', function () {
                var existingRow = expandArea.querySelector('[data-lang="' + langObj.code + '"]');
                if (existingRow) {
                    // Close it
                    expandArea.removeChild(existingRow);
                    chipEl.classList.remove('active');
                    return;
                }

                // Open it
                chipEl.classList.add('active');
                var expRow = el('div', { className: 'chip-expand-row' });
                expRow.setAttribute('data-lang', langObj.code);

                var tag = el('span', { className: 'lang-tag' });
                tag.textContent = langObj.code;
                tag.style.color = langObj.color || 'var(--text-secondary)';
                tag.style.borderColor = langObj.color || 'var(--border)';
                expRow.appendChild(tag);

                if (isTextarea) {
                    expRow.appendChild(el('textarea', {
                        className: 'form-input', rows: '2',
                        textContent: langValue, placeholder: langObj.label
                    }));
                } else {
                    expRow.appendChild(el('input', {
                        type: 'text', className: 'form-input',
                        value: langValue, placeholder: langObj.label
                    }));
                }

                if (auto) {
                    expRow.appendChild(el('span', { className: 'auto-badge', textContent: '✨ auto' }));
                }

                if (!langValue) {
                    var autoBtn = el('button', {
                        className: 'btn-translate-all',
                        style: 'padding:4px 10px;font-size:11px;margin:0;'
                    });
                    autoBtn.textContent = '⚡ Auto-translate';
                    autoBtn.addEventListener('click', function (e) {
                        e.stopPropagation();
                        mockTranslate(expRow, langObj.code, chipEl);
                    });
                    expRow.appendChild(autoBtn);
                }

                var closeBtn = el('button', { className: 'chip-expand-close' });
                closeBtn.textContent = '✕';
                closeBtn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    expandArea.removeChild(expRow);
                    chipEl.classList.remove('active');
                });
                expRow.appendChild(closeBtn);

                expandArea.appendChild(expRow);
            });
        })(chip, lang, langVal, isAuto);

        row.appendChild(chip);
    });

    // Overflow "+N" chip
    if (overflowLangs.length > 0) {
        var overflow = el('button', { className: 'lang-chip-overflow' });
        overflow.textContent = '+' + overflowLangs.length;
        var expanded = false;
        overflow.addEventListener('click', function () {
            expanded = !expanded;
            overflowLangs.forEach(function (c) { c.style.display = expanded ? '' : 'none'; });
            overflow.textContent = expanded ? '−' : ('+' + overflowLangs.length);
        });
        row.appendChild(overflow);
    }

    g.appendChild(row);
    g.appendChild(expandArea);
    parent.appendChild(g);
}

// Mock translate function — simulates API call, fills input with placeholder
function mockTranslate(expRow, targetCode, chipEl) {
    var input = expRow.querySelector('.form-input');
    var btn = expRow.querySelector('.btn-translate-all');
    if (btn) btn.textContent = '⏳ Translating...';
    setTimeout(function () {
        // Simulate: copy German value or show placeholder
        if (input) {
            input.value = '[' + targetCode.toUpperCase() + ' translation — via DeepL]';
            input.focus();
        }
        if (btn) btn.remove();
        // Add auto badge
        var badge = el('span', { className: 'auto-badge', textContent: '✨ auto' });
        var closeBtn = expRow.querySelector('.chip-expand-close');
        if (closeBtn) expRow.insertBefore(badge, closeBtn);
        // Update chip status
        if (chipEl) {
            chipEl.classList.remove('empty');
            chipEl.classList.add('auto');
            var statusSpan = chipEl.querySelector('.chip-status');
            if (statusSpan) statusSpan.textContent = '✨';
        }
    }, 800);
}
```

**Step 3: Commit**

```bash
git add mockup/T5-activity-editor.html
git commit -m "feat: add chip-row JS functions (addChipRowField, mockTranslate)"
```

---

### Task 4: Wire chip-row into buildEditForm

**Files:**
- Modify: `mockup/T5-activity-editor.html` — `buildEditForm` function (lines ~719-874)

**Step 1: Replace all `addLangField` / `addLangTextarea` calls with `addChipRowField`**

In the `buildEditForm` function, make these replacements:

**Instruction field (line 724):**
```javascript
// OLD: addLangField(inner, 'Instruction', act.instruction);
addChipRowField(inner, 'Instruction', act.instruction, { kuField: false });
```
(Instruction has no Kurdish source — it's already a multi-lang object)

**Flashcard section (lines 728-733):**
```javascript
case 'flashcard':
    addField(inner, 'Word (Kurdî)', c.word || '');
    addChipRowField(inner, 'Translation', c.translation, { kuField: false });
    addField(inner, 'Example Sentence (Kurdî)', c.example || '');
    addChipRowField(inner, 'Example Translation', c.exampleTranslation, { kuField: false });
    break;
```

**Reading section — dialogue title (line 736):**
```javascript
addChipRowField(inner, 'Dialogue Title', c.title, { kuField: false });
```

**Reading section — per-line translations (lines 746-752):**
Replace the `EDIT_LANGS.forEach` loop for dialogue line translations with chip-row. For each line, after the Kurdish input row, add:
```javascript
// Replace the EDIT_LANGS.forEach block for line translations with:
addChipRowField(pairs, '', line, { kuField: false });
```

Note: For the reading/dialogue case, the lines have a more complex structure (speaker + ku text + per-lang translations). The chip row should be added per dialogue line. This is a tighter integration — wrap each line's translations into a chip row inside the pairs container.

**MCQ options (lines 772-779):**
Replace the `EDIT_LANGS.forEach` inside each option with:
```javascript
// Replace the optLangs block with:
var optChipContainer = el('div', { style: 'flex:1;' });
addChipRowField(optChipContainer, '', opt, { kuField: false });
item.appendChild(optChipContainer);
```

**MCQ explanation (line 790):**
```javascript
if (c.explanation) addChipRowField(inner, 'Explanation', c.explanation, { kuField: false, textarea: true });
```

**Gap fill explanation (line 806):**
```javascript
if (c.explanation) addChipRowField(inner, 'Explanation', c.explanation, { kuField: false, textarea: true });
```

**Matching pairs — per-language translations (lines 821-828):**
Replace the `EDIT_LANGS.forEach` inside each pair with:
```javascript
// Replace the langStack block with:
var pairChipContainer = el('div');
addChipRowField(pairChipContainer, '', pair, { kuField: false });
kuRow.appendChild(pairChipContainer);
```

**Step 2: Verify in browser**

Open `http://localhost:8080/T5-activity-editor.html?unit=1&lesson=1-1`:
- Expand a flashcard → should see Kurdish input + chip row with 🌐 [EN●] [DE●] [TR○] etc.
- Click a chip → expands inline with input + ✕ close
- Click an empty chip → shows "⚡ Auto-translate" button
- Click "+N" → reveals remaining language chips

**Step 3: Commit**

```bash
git add mockup/T5-activity-editor.html
git commit -m "feat: wire chip-row into all activity type editors"
```

---

### Task 5: Add per-activity "Translate all" button

**Files:**
- Modify: `mockup/T5-activity-editor.html` — `buildEditForm` function

**Step 1: Add translate-all button before the Published toggle**

Insert before the Published toggle section (before line ~842):

```javascript
// Translate-all button (per activity)
var translateRow = el('div', { className: 'form-group' });
var translateBtn = el('button', { className: 'btn-translate-all' });
translateBtn.textContent = '✨ Translate all empty fields';
translateBtn.addEventListener('click', function () {
    translateBtn.textContent = '⏳ Translating all fields...';
    // Find all empty chips in this activity card and simulate translation
    var emptyChips = inner.querySelectorAll('.lang-chip.empty');
    var delay = 0;
    emptyChips.forEach(function (chip) {
        delay += 200;
        setTimeout(function () {
            chip.classList.remove('empty');
            chip.classList.add('auto');
            var st = chip.querySelector('.chip-status');
            if (st) st.textContent = '✨';
        }, delay);
    });
    setTimeout(function () {
        translateBtn.textContent = '✨ Translate all empty fields';
    }, delay + 500);
});
translateRow.appendChild(translateBtn);
inner.appendChild(translateRow);
```

**Step 2: Verify in browser**

Expand a flashcard → click "✨ Translate all empty fields" → all ○ chips should animate to ✨.

**Step 3: Commit**

```bash
git add mockup/T5-activity-editor.html
git commit -m "feat: add per-activity translate-all button"
```

---

### Task 6: Add per-lesson "Translate entire lesson" button

**Files:**
- Modify: `mockup/T5-activity-editor.html` — render section (lines ~1007-1015)

**Step 1: Add lesson-level translate button after the section header**

In the `.then()` callback, after `renderLessonHeader` (line 1005), insert:

```javascript
// Add lesson-level translate button
var sectionHeader = document.querySelector('.section-header');
if (sectionHeader) {
    var lessonTransBtn = el('button', { className: 'btn-translate-lesson' });
    lessonTransBtn.textContent = '✨ Translate entire lesson (' + (lesson.activities ? lesson.activities.length : 0) + ' activities)';
    lessonTransBtn.addEventListener('click', function () {
        lessonTransBtn.textContent = '⏳ Translating all activities...';
        var allEmpty = document.querySelectorAll('.lang-chip.empty');
        var delay = 0;
        allEmpty.forEach(function (chip) {
            delay += 100;
            setTimeout(function () {
                chip.classList.remove('empty');
                chip.classList.add('auto');
                var st = chip.querySelector('.chip-status');
                if (st) st.textContent = '✨';
            }, delay);
        });
        setTimeout(function () {
            lessonTransBtn.textContent = '✨ Translations complete!';
            setTimeout(function () {
                lessonTransBtn.textContent = '✨ Translate entire lesson (' + (lesson.activities ? lesson.activities.length : 0) + ' activities)';
            }, 2000);
        }, delay + 500);
    });
    sectionHeader.appendChild(lessonTransBtn);
}
```

**Step 2: Verify in browser**

Page should show "✨ Translate entire lesson (N activities)" button next to "Add Activity". Clicking it animates all empty chips across all activities.

**Step 3: Commit**

```bash
git add mockup/T5-activity-editor.html
git commit -m "feat: add lesson-level translate-all button"
```

---

### Task 7: Clean up deprecated functions and final polish

**Files:**
- Modify: `mockup/T5-activity-editor.html`

**Step 1: Remove old `addLangField` and `addLangTextarea` functions**

Delete lines ~890-918 (the old stacked-input functions) since they are no longer called.

**Step 2: Remove old `.lang-tag.en` and `.lang-tag.de` hardcoded CSS color rules**

Delete lines ~458-461 — colors are now dynamic via `lang.color` from LANGUAGES config.

**Step 3: Verify in browser — full walkthrough**

Test all activity types:
1. Flashcard — chip row on Translation, Example Translation, Instruction
2. Reading — chip row on Dialogue Title, per-line translations
3. MCQ — chip row on each option, explanation
4. Gap fill — chip row on explanation
5. Matching — chip row on each pair's translations
6. Click chips to expand/close
7. Click "Auto-translate" on empty expanded input
8. Click "Translate all" per activity
9. Click "Translate entire lesson"
10. Test "+N" overflow on chip rows

**Step 4: Final commit**

```bash
git add mockup/T5-activity-editor.html
git commit -m "refactor: remove deprecated stacked lang-field functions, clean up CSS"
```

---

## Summary

| Task | Description | Files |
|------|-------------|-------|
| 1 | Add language colors to theme.js | `mockup/shared/theme.js` |
| 2 | Add chip-row CSS | `mockup/T5-activity-editor.html` |
| 3 | Build chip-row JS functions | `mockup/T5-activity-editor.html` |
| 4 | Wire chip-row into buildEditForm | `mockup/T5-activity-editor.html` |
| 5 | Per-activity translate-all button | `mockup/T5-activity-editor.html` |
| 6 | Per-lesson translate-all button | `mockup/T5-activity-editor.html` |
| 7 | Clean up deprecated code + polish | `mockup/T5-activity-editor.html` |

Total: 7 tasks, 2 files modified.

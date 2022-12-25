<script lang="ts">
  type Subject = {
    fileName: string;
    code: string;
  };

  type Competitor = Subject & {
    selectName: string;
  };

  export let subject: Subject;
  export let competitors: [Competitor, Competitor];

  let currentCompetitor: number = 0;
</script>

<div class="row">
  <div class="col">
    <small>{subject.fileName}</small>
    {@html subject.code}
  </div>
  <div class="col">
    <select bind:value={currentCompetitor} class="form-select">
      {#each competitors as competitor, i}
        <option value={i}>{competitor.selectName}</option>
      {/each}
    </select>
    <small>{competitors[currentCompetitor].fileName}</small>
    {@html competitors[currentCompetitor].code}
  </div>
</div>


<style lang="scss">
  small {
    display: block;
    margin-top: 8px;
  }

  .select-ghost {
    display: flex;
    align-items: center;

    hr {
      flex-grow: 1;
    }
  }
</style>

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
  let selectHeight: number;
</script>

<div class="row gx-2">
  <div class="col col-lg-12 col-xl-6">
    <div class="select-ghost" style="height: {selectHeight}px;">
      <hr/>
    </div>

    <small>{subject.fileName}</small>
    {@html subject.code}
  </div>
  <div class="col col-lg-12 col-xl-6">
    <div bind:offsetHeight={selectHeight}>
      <select bind:value={currentCompetitor} class="form-select">
        {#each competitors as competitor, i}
          <option value={i}>{competitor.selectName}</option>
        {/each}
      </select>
    </div>

    <small>{competitors[currentCompetitor].fileName}</small>
    {@html competitors[currentCompetitor].code}
  </div>
</div>


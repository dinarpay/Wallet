<template lang="html">
  <div class="already-owned-container">
    <finalize-modal
      ref="finalizeModal"
      :domain-name="domainName"
      :finalize="finalize"
    />
    <h3>{{ domainName }}.{{ tld }} {{ $t('dapps.alreadyOwned') }}.</h3>
    <div class="content-container">
      <p class="label">
        {{ $t('dapps.labelHash') }}({{ domainName }}.{{ tld }}):
      </p>
      <p class="content">{{ labelHash }}</p>
    </div>
    <div class="content-container">
      <p class="label">{{ $t('dapps.nameHash') }}({{ domainName }}):</p>
      <p class="content">{{ nameHash }}</p>
    </div>
    <div class="content-container">
      <p class="label">{{ $t('dapps.owner') }}:</p>
      <p class="content">{{ owner }}</p>
    </div>
    <div v-if="deedOwner != '0x'" class="content-container">
      <p class="label">{{ $t('dapps.deedOwner') }}:</p>
      <p class="content">{{ deedOwner }}</p>
    </div>
    <div class="content-container">
      <p class="label">{{ $t('dapps.resolverAddr') }}:</p>
      <p class="content">{{ resolverAddress }}</p>
    </div>
    <div class="owner-options">
      <button
        v-if="
          deedOwner === account.address &&
            owner === '0x0000000000000000000000000000000000000000'
        "
        class="finalize-button"
        @click="openFinalizeModal"
      >
        {{ $t('dapps.finalize') }}
      </button>
      <button
        v-if="owner.toLowerCase() === account.address.toLowerCase()"
        class="manage-button"
        @click="manageEns"
      >
        {{ $t('dapps.manage') }}
      </button>
    </div>
    <interface-bottom-text
      :link-text="$t('interface.helpCenter')"
      :question="$t('interface.haveIssues')"
      link="https://xinfin.network"
    />
  </div>
</template>

<script>
import InterfaceBottomText from '@/components/InterfaceBottomText';
import FinalizeModal from '../../components/FinalizeModal/';

import { mapGetters } from 'vuex';
export default {
  components: {
    'interface-bottom-text': InterfaceBottomText,
    'finalize-modal': FinalizeModal
  },
  props: {
    labelHash: {
      type: String,
      default: ''
    },
    nameHash: {
      type: String,
      default: ''
    },
    owner: {
      type: String,
      default: ''
    },
    deedOwner: {
      type: String,
      default: ''
    },
    resolverAddress: {
      type: String,
      default: ''
    },
    domainName: {
      type: String,
      default: ''
    },
    tld: {
      type: String,
      default: ''
    },
    finalize: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      account: 'account'
    })
  },
  mounted() {
    if (this.domainName === '') {
      this.$router.push('/interface/dapps/register-domain');
    }
  },
  methods: {
    openFinalizeModal() {
      this.$refs.finalizeModal.$refs.finalize.show();
    },
    manageEns() {
      this.$router.push('manage');
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'AlreadyOwnedENSContainer.scss';
</style>

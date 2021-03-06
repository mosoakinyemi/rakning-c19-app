let instance = null;

class FlagResource {
  static getInstance() {
    if (!instance) {
      instance = new FlagResource();
    }
    return instance;
  }

  constructor() {
    this.flags = {
      ad: require('../../../../assets/flags/ad.png'),
      ae: require('../../../../assets/flags/ae.png'),
      af: require('../../../../assets/flags/af.png'),
      ag: require('../../../../assets/flags/ag.png'),
      ai: require('../../../../assets/flags/ai.png'),
      al: require('../../../../assets/flags/al.png'),
      am: require('../../../../assets/flags/am.png'),
      ao: require('../../../../assets/flags/ao.png'),
      ar: require('../../../../assets/flags/ar.png'),
      as: require('../../../../assets/flags/as.png'),
      at: require('../../../../assets/flags/at.png'),
      au: require('../../../../assets/flags/au.png'),
      aw: require('../../../../assets/flags/aw.png'),
      ax: require('../../../../assets/flags/ax.png'),
      az: require('../../../../assets/flags/az.png'),
      ba: require('../../../../assets/flags/ba.png'),
      bb: require('../../../../assets/flags/bb.png'),
      bd: require('../../../../assets/flags/bd.png'),
      be: require('../../../../assets/flags/be.png'),
      bf: require('../../../../assets/flags/bf.png'),
      bg: require('../../../../assets/flags/bg.png'),
      bh: require('../../../../assets/flags/bh.png'),
      bi: require('../../../../assets/flags/bi.png'),
      bj: require('../../../../assets/flags/bj.png'),
      bl: require('../../../../assets/flags/bl.png'),
      bm: require('../../../../assets/flags/bm.png'),
      bn: require('../../../../assets/flags/bn.png'),
      bo: require('../../../../assets/flags/bo.png'),
      bq: require('../../../../assets/flags/bq.png'),
      br: require('../../../../assets/flags/br.png'),
      bs: require('../../../../assets/flags/bs.png'),
      bt: require('../../../../assets/flags/bt.png'),
      bw: require('../../../../assets/flags/bw.png'),
      by: require('../../../../assets/flags/by.png'),
      bz: require('../../../../assets/flags/bz.png'),
      ca: require('../../../../assets/flags/ca.png'),
      cc: require('../../../../assets/flags/cc.png'),
      cd: require('../../../../assets/flags/cd.png'),
      cf: require('../../../../assets/flags/cf.png'),
      cg: require('../../../../assets/flags/cg.png'),
      ch: require('../../../../assets/flags/ch.png'),
      ci: require('../../../../assets/flags/ci.png'),
      ck: require('../../../../assets/flags/ck.png'),
      cl: require('../../../../assets/flags/cl.png'),
      cm: require('../../../../assets/flags/cm.png'),
      cn: require('../../../../assets/flags/cn.png'),
      co: require('../../../../assets/flags/co.png'),
      cr: require('../../../../assets/flags/cr.png'),
      cu: require('../../../../assets/flags/cu.png'),
      cv: require('../../../../assets/flags/cv.png'),
      cw: require('../../../../assets/flags/cw.png'),
      cx: require('../../../../assets/flags/cx.png'),
      cy: require('../../../../assets/flags/cy.png'),
      cz: require('../../../../assets/flags/cz.png'),
      de: require('../../../../assets/flags/de.png'),
      dj: require('../../../../assets/flags/dj.png'),
      dk: require('../../../../assets/flags/dk.png'),
      dm: require('../../../../assets/flags/dm.png'),
      do: require('../../../../assets/flags/do.png'),
      dz: require('../../../../assets/flags/dz.png'),
      ec: require('../../../../assets/flags/ec.png'),
      ee: require('../../../../assets/flags/ee.png'),
      eg: require('../../../../assets/flags/eg.png'),
      eh: require('../../../../assets/flags/eh.png'),
      er: require('../../../../assets/flags/er.png'),
      es: require('../../../../assets/flags/es.png'),
      et: require('../../../../assets/flags/et.png'),
      fi: require('../../../../assets/flags/fi.png'),
      fj: require('../../../../assets/flags/fj.png'),
      fk: require('../../../../assets/flags/fk.png'),
      fm: require('../../../../assets/flags/fm.png'),
      fo: require('../../../../assets/flags/fo.png'),
      fr: require('../../../../assets/flags/fr.png'),
      ga: require('../../../../assets/flags/ga.png'),
      gb: require('../../../../assets/flags/gb.png'),
      gd: require('../../../../assets/flags/gd.png'),
      ge: require('../../../../assets/flags/ge.png'),
      gf: require('../../../../assets/flags/gf.png'),
      gg: require('../../../../assets/flags/gg.png'),
      gh: require('../../../../assets/flags/gh.png'),
      gi: require('../../../../assets/flags/gi.png'),
      gm: require('../../../../assets/flags/gm.png'),
      gn: require('../../../../assets/flags/gn.png'),
      gp: require('../../../../assets/flags/gp.png'),
      gq: require('../../../../assets/flags/gq.png'),
      gr: require('../../../../assets/flags/gr.png'),
      gt: require('../../../../assets/flags/gt.png'),
      gu: require('../../../../assets/flags/gu.png'),
      gw: require('../../../../assets/flags/gw.png'),
      gy: require('../../../../assets/flags/gy.png'),
      hk: require('../../../../assets/flags/hk.png'),
      hn: require('../../../../assets/flags/hn.png'),
      hr: require('../../../../assets/flags/hr.png'),
      ht: require('../../../../assets/flags/ht.png'),
      hu: require('../../../../assets/flags/hu.png'),
      id: require('../../../../assets/flags/id.png'),
      ie: require('../../../../assets/flags/ie.png'),
      il: require('../../../../assets/flags/il.png'),
      im: require('../../../../assets/flags/im.png'),
      in: require('../../../../assets/flags/in.png'),
      io: require('../../../../assets/flags/io.png'),
      iq: require('../../../../assets/flags/iq.png'),
      ir: require('../../../../assets/flags/ir.png'),
      is: require('../../../../assets/flags/is.png'),
      it: require('../../../../assets/flags/it.png'),
      je: require('../../../../assets/flags/je.png'),
      jm: require('../../../../assets/flags/jm.png'),
      jo: require('../../../../assets/flags/jo.png'),
      jp: require('../../../../assets/flags/jp.png'),
      ke: require('../../../../assets/flags/ke.png'),
      kg: require('../../../../assets/flags/kg.png'),
      kh: require('../../../../assets/flags/kh.png'),
      ki: require('../../../../assets/flags/ki.png'),
      km: require('../../../../assets/flags/km.png'),
      kn: require('../../../../assets/flags/kn.png'),
      kp: require('../../../../assets/flags/kp.png'),
      kr: require('../../../../assets/flags/kr.png'),
      ks: require('../../../../assets/flags/ks.png'),
      kw: require('../../../../assets/flags/kw.png'),
      ky: require('../../../../assets/flags/ky.png'),
      kz: require('../../../../assets/flags/kz.png'),
      la: require('../../../../assets/flags/la.png'),
      lb: require('../../../../assets/flags/lb.png'),
      lc: require('../../../../assets/flags/lc.png'),
      li: require('../../../../assets/flags/li.png'),
      lk: require('../../../../assets/flags/lk.png'),
      lr: require('../../../../assets/flags/lr.png'),
      ls: require('../../../../assets/flags/ls.png'),
      lt: require('../../../../assets/flags/lt.png'),
      lu: require('../../../../assets/flags/lu.png'),
      lv: require('../../../../assets/flags/lv.png'),
      ly: require('../../../../assets/flags/ly.png'),
      ma: require('../../../../assets/flags/ma.png'),
      mc: require('../../../../assets/flags/mc.png'),
      md: require('../../../../assets/flags/md.png'),
      me: require('../../../../assets/flags/me.png'),
      mf: require('../../../../assets/flags/mf.png'),
      mg: require('../../../../assets/flags/mg.png'),
      mh: require('../../../../assets/flags/mh.png'),
      mk: require('../../../../assets/flags/mk.png'),
      ml: require('../../../../assets/flags/ml.png'),
      mm: require('../../../../assets/flags/mm.png'),
      mn: require('../../../../assets/flags/mn.png'),
      mo: require('../../../../assets/flags/mo.png'),
      mp: require('../../../../assets/flags/mp.png'),
      mq: require('../../../../assets/flags/mq.png'),
      mr: require('../../../../assets/flags/mr.png'),
      ms: require('../../../../assets/flags/ms.png'),
      mt: require('../../../../assets/flags/mt.png'),
      mu: require('../../../../assets/flags/mu.png'),
      mv: require('../../../../assets/flags/mv.png'),
      mw: require('../../../../assets/flags/mw.png'),
      mx: require('../../../../assets/flags/mx.png'),
      my: require('../../../../assets/flags/my.png'),
      mz: require('../../../../assets/flags/mz.png'),
      na: require('../../../../assets/flags/na.png'),
      nc: require('../../../../assets/flags/nc.png'),
      ne: require('../../../../assets/flags/ne.png'),
      nf: require('../../../../assets/flags/nf.png'),
      ng: require('../../../../assets/flags/ng.png'),
      ni: require('../../../../assets/flags/ni.png'),
      nl: require('../../../../assets/flags/nl.png'),
      no: require('../../../../assets/flags/no.png'),
      np: require('../../../../assets/flags/np.png'),
      nr: require('../../../../assets/flags/nr.png'),
      nu: require('../../../../assets/flags/nu.png'),
      nz: require('../../../../assets/flags/nz.png'),
      om: require('../../../../assets/flags/om.png'),
      pa: require('../../../../assets/flags/pa.png'),
      pe: require('../../../../assets/flags/pe.png'),
      pf: require('../../../../assets/flags/pf.png'),
      pg: require('../../../../assets/flags/pg.png'),
      ph: require('../../../../assets/flags/ph.png'),
      pk: require('../../../../assets/flags/pk.png'),
      pl: require('../../../../assets/flags/pl.png'),
      pm: require('../../../../assets/flags/pm.png'),
      pr: require('../../../../assets/flags/pr.png'),
      ps: require('../../../../assets/flags/ps.png'),
      pt: require('../../../../assets/flags/pt.png'),
      pw: require('../../../../assets/flags/pw.png'),
      py: require('../../../../assets/flags/py.png'),
      qa: require('../../../../assets/flags/qa.png'),
      re: require('../../../../assets/flags/re.png'),
      ro: require('../../../../assets/flags/ro.png'),
      rs: require('../../../../assets/flags/rs.png'),
      ru: require('../../../../assets/flags/ru.png'),
      rw: require('../../../../assets/flags/rw.png'),
      sa: require('../../../../assets/flags/sa.png'),
      sb: require('../../../../assets/flags/sb.png'),
      sc: require('../../../../assets/flags/sc.png'),
      sd: require('../../../../assets/flags/sd.png'),
      se: require('../../../../assets/flags/se.png'),
      sg: require('../../../../assets/flags/sg.png'),
      sh: require('../../../../assets/flags/sh.png'),
      si: require('../../../../assets/flags/si.png'),
      sj: require('../../../../assets/flags/sj.png'),
      sk: require('../../../../assets/flags/sk.png'),
      sl: require('../../../../assets/flags/sl.png'),
      sm: require('../../../../assets/flags/sm.png'),
      sn: require('../../../../assets/flags/sn.png'),
      so: require('../../../../assets/flags/so.png'),
      sr: require('../../../../assets/flags/sr.png'),
      ss: require('../../../../assets/flags/ss.png'),
      st: require('../../../../assets/flags/st.png'),
      sv: require('../../../../assets/flags/sv.png'),
      sx: require('../../../../assets/flags/sx.png'),
      sy: require('../../../../assets/flags/sy.png'),
      sz: require('../../../../assets/flags/sz.png'),
      tc: require('../../../../assets/flags/tc.png'),
      td: require('../../../../assets/flags/td.png'),
      tg: require('../../../../assets/flags/tg.png'),
      th: require('../../../../assets/flags/th.png'),
      tj: require('../../../../assets/flags/tj.png'),
      tk: require('../../../../assets/flags/tk.png'),
      tl: require('../../../../assets/flags/tl.png'),
      tm: require('../../../../assets/flags/tm.png'),
      tn: require('../../../../assets/flags/tn.png'),
      to: require('../../../../assets/flags/to.png'),
      tr: require('../../../../assets/flags/tr.png'),
      tt: require('../../../../assets/flags/tt.png'),
      tv: require('../../../../assets/flags/tv.png'),
      tw: require('../../../../assets/flags/tw.png'),
      tz: require('../../../../assets/flags/tz.png'),
      ua: require('../../../../assets/flags/ua.png'),
      ug: require('../../../../assets/flags/ug.png'),
      us: require('../../../../assets/flags/us.png'),
      uy: require('../../../../assets/flags/uy.png'),
      uz: require('../../../../assets/flags/uz.png'),
      va: require('../../../../assets/flags/va.png'),
      vc: require('../../../../assets/flags/vc.png'),
      ve: require('../../../../assets/flags/ve.png'),
      vg: require('../../../../assets/flags/vg.png'),
      vi: require('../../../../assets/flags/vi.png'),
      vn: require('../../../../assets/flags/vn.png'),
      vu: require('../../../../assets/flags/vu.png'),
      wf: require('../../../../assets/flags/wf.png'),
      ws: require('../../../../assets/flags/ws.png'),
      ye: require('../../../../assets/flags/ye.png'),
      yt: require('../../../../assets/flags/yt.png'),
      za: require('../../../../assets/flags/za.png'),
      zm: require('../../../../assets/flags/zm.png'),
      zw: require('../../../../assets/flags/zw.png'),
    };
  }

  get(name) {
    return this.flags[name];
  }
}

export default FlagResource.getInstance();

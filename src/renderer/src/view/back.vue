<template>
    <div data-v-65c642de="" class="routerWrap"><!---->
        <div data-v-65c642de="" class="avue-view routerView">
            <div class="basic-container">
                <div class="el-card is-always-shadow"><!---->
                    <div class="el-card__body">
                        <div style="position: relative;">
                            <h3 style="text-align: center;">电子器件信息需求表</h3><!---->
                        </div>
                        <div role="tablist" aria-multiselectable="true" class="el-collapse">
                            <form class="el-form">
                                <div class="el-collapse-item is-active">
                                    <div role="tab" aria-expanded="true" aria-controls="el-collapse-content-887"
                                        aria-describedby="el-collapse-content-887">
                                        <div role="button" id="el-collapse-head-887" tabindex="0"
                                            class="el-collapse-item__header is-active"><i class="el-icon-document"></i>
                                            基本信息 <i class="el-collapse-item__arrow el-icon-arrow-right is-active"></i>
                                        </div>
                                    </div>
                                    <div role="tabpanel" aria-labelledby="el-collapse-head-887"
                                        id="el-collapse-content-887" class="el-collapse-item__wrap">
                                        <div class="el-collapse-item__content">
                                            <div class="el-row el-row--flex" style="flex-wrap: wrap;">
                                                <div class="el-col el-col-8">
                                                    <div class="el-form-item el-form-item--small"><label
                                                            for="editBo.applicant" class="el-form-item__label"
                                                            style="width: 140px;">申请人</label>
                                                        <div class="el-form-item__content" style="margin-left: 140px;">
                                                            <div
                                                                class="el-input el-input--small el-input-group el-input-group--append">
                                                                <!----><input type="text" readonly="readonly"
                                                                    autocomplete="off" placeholder="请选择申请人"
                                                                    class="el-input__inner"><!----><!---->
                                                                <div class="el-input-group__append"><button
                                                                        type="button"
                                                                        class="el-button el-button--default el-button--small"><!----><i
                                                                            class="el-icon-search"></i><!----></button>
                                                                </div><!---->
                                                            </div><!---->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="el-col el-col-8">
                                                    <div class="el-form-item el-form-item--small"><label
                                                            for="editBo.applicantAccount" class="el-form-item__label"
                                                            style="width: 140px;">员工编号</label>
                                                        <div class="el-form-item__content" style="margin-left: 140px;">
                                                            <div class="el-input el-input--small is-disabled">
                                                                <!----><input type="text" disabled="disabled"
                                                                    autocomplete="off" placeholder="选择申请人后自动填写"
                                                                    class="el-input__inner"><!----><!----><!----><!---->
                                                            </div><!---->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="el-col el-col-8">
                                                    <div class="el-form-item el-form-item--small"><label
                                                            for="editBo.requestDate" class="el-form-item__label"
                                                            style="width: 140px;">申请日期</label>
                                                        <div class="el-form-item__content" style="margin-left: 140px;">
                                                            <div class="el-input el-input--small is-disabled">
                                                                <!----><input type="text" disabled="disabled"
                                                                    autocomplete="off" placeholder="请选择申请日期"
                                                                    class="el-input__inner"><!----><!----><!----><!---->
                                                            </div><!---->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="el-col el-col-8">
                                                    <div class="el-form-item el-form-item--small"><label
                                                            for="editBo.department" class="el-form-item__label"
                                                            style="width: 140px;">部门</label>
                                                        <div class="el-form-item__content" style="margin-left: 140px;">
                                                            <div class="el-input el-input--small is-disabled">
                                                                <!----><input type="text" disabled="disabled"
                                                                    autocomplete="off" placeholder="选择申请人后自动填写"
                                                                    class="el-input__inner"><!----><!----><!----><!---->
                                                            </div><!---->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="el-col el-col-8">
                                                    <div class="el-form-item el-form-item--small"><label
                                                            for="editBo.childDepartment" class="el-form-item__label"
                                                            style="width: 140px;">科室</label>
                                                        <div class="el-form-item__content" style="margin-left: 140px;">
                                                            <div class="el-input el-input--small is-disabled">
                                                                <!----><input type="text" disabled="disabled"
                                                                    autocomplete="off" placeholder="选择申请人后自动填写"
                                                                    class="el-input__inner"><!----><!----><!----><!---->
                                                            </div><!---->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="el-col el-col-8">
                                                    <div class="el-form-item el-form-item--small"><label
                                                            for="editBo.applicantTel" class="el-form-item__label"
                                                            style="width: 140px;">联系方式</label>
                                                        <div class="el-form-item__content" style="margin-left: 140px;">
                                                            <div class="el-input el-input--small"><!----><input
                                                                    type="text" autocomplete="off"
                                                                    onkeyup="this.value=this.value.replace(/[^\d]/g,'')"
                                                                    placeholder="请填写联系方式"
                                                                    class="el-input__inner"><!----><!----><!----><!---->
                                                            </div><!---->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="el-col el-col-8">
                                                    <div class="el-form-item is-required el-form-item--small"><label
                                                            for="editBo.borrowCarTypeFlag" class="el-form-item__label"
                                                            style="width: 140px;">有无借用车型</label>
                                                        <div class="el-form-item__content" style="margin-left: 140px;">
                                                            <div role="radiogroup" class="el-radio-group"><label
                                                                    role="radio" tabindex="-1" class="el-radio"><span
                                                                        class="el-radio__input"><span
                                                                            class="el-radio__inner"></span><input
                                                                            type="radio" aria-hidden="true"
                                                                            tabindex="-1" autocomplete="off"
                                                                            class="el-radio__original"
                                                                            value="true"></span><span
                                                                        class="el-radio__label">有<!----></span></label><label
                                                                    role="radio" aria-checked="true" tabindex="0"
                                                                    class="el-radio is-checked"><span
                                                                        class="el-radio__input is-checked"><span
                                                                            class="el-radio__inner"></span><input
                                                                            type="radio" aria-hidden="true"
                                                                            tabindex="-1" autocomplete="off"
                                                                            class="el-radio__original"
                                                                            value="false"></span><span
                                                                        class="el-radio__label">无<!----></span></label>
                                                            </div><!---->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="el-col el-col-8">
                                                    <div
                                                        class="el-form-item is-success is-required el-form-item--small">
                                                        <label for="editBo.version" class="el-form-item__label"
                                                            style="width: 140px;">版本</label>
                                                        <div class="el-form-item__content" style="margin-left: 140px;">
                                                            <div class="el-select el-select--small"
                                                                style="width: 100%;"><!---->
                                                                <div class="el-input el-input--small el-input--suffix">
                                                                    <!----><input type="text" autocomplete="off"
                                                                        placeholder="请选择版本" class="el-input__inner"
                                                                        readonly="readonly"><!----><span
                                                                        class="el-input__suffix"><span
                                                                            class="el-input__suffix-inner"><i
                                                                                class="el-select__caret el-input__icon el-icon-arrow-up"
                                                                                style=""></i><!----><!----><!----><!----><!----></span><i
                                                                            class="el-input__icon el-input__validateIcon el-icon-circle-check"></i></span><!----><!---->
                                                                </div>
                                                            </div><!---->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="el-col el-col-8">
                                                    <div class="el-form-item is-required el-form-item--small"><label
                                                            for="editBo.phase" class="el-form-item__label"
                                                            style="width: 140px;">适用阶段</label>
                                                        <div class="el-form-item__content" style="margin-left: 140px;">
                                                            <div role="group" aria-label="checkbox-group"
                                                                class="el-checkbox-group"><label
                                                                    class="el-checkbox"><span
                                                                        class="el-checkbox__input"><span
                                                                            class="el-checkbox__inner"></span><input
                                                                            type="checkbox" aria-hidden="false"
                                                                            class="el-checkbox__original"
                                                                            value="MULE骡子车"></span><span
                                                                        class="el-checkbox__label"> MULE骡子车
                                                                        <!----></span></label><label
                                                                    class="el-checkbox"><span
                                                                        class="el-checkbox__input"><span
                                                                            class="el-checkbox__inner"></span><input
                                                                            type="checkbox" aria-hidden="false"
                                                                            class="el-checkbox__original"
                                                                            value="OTS正式工装"></span><span
                                                                        class="el-checkbox__label"> OTS正式工装
                                                                        <!----></span></label><label
                                                                    class="el-checkbox"><span
                                                                        class="el-checkbox__input"><span
                                                                            class="el-checkbox__inner"></span><input
                                                                            type="checkbox" aria-hidden="false"
                                                                            class="el-checkbox__original"
                                                                            value="PRO软工装"></span><span
                                                                        class="el-checkbox__label"> PRO软工装
                                                                        <!----></span></label></div><!---->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="el-col el-col-8">
                                                    <div
                                                        class="el-form-item is-success is-required el-form-item--small">
                                                        <label for="editBo.carTypeCode" class="el-form-item__label"
                                                            style="width: 140px;">车型代码</label>
                                                        <div class="el-form-item__content" style="margin-left: 140px;">
                                                            <div class="el-select el-select--small"
                                                                style="width: 100%;">
                                                                <div class="el-select__tags"
                                                                    style="width: 100%; max-width: 103.92px;">
                                                                    <!----><span><span
                                                                            class="el-tag el-tag--info el-tag--mini el-tag--light"><span
                                                                                class="el-select__tags-text">CN110PPS</span><i
                                                                                class="el-tag__close el-icon-close"></i></span></span><input
                                                                        type="text" autocomplete="off"
                                                                        class="el-select__input is-small"
                                                                        style="flex-grow: 1; width: 0.192455%; max-width: 93.9202px;">
                                                                </div>
                                                                <div class="el-input el-input--small el-input--suffix">
                                                                    <!----><input tabindex="-1" type="text"
                                                                        readonly="readonly" autocomplete="off"
                                                                        placeholder="" class="el-input__inner"
                                                                        style="height: 58px;"><!----><span
                                                                        class="el-input__suffix"><span
                                                                            class="el-input__suffix-inner"><i
                                                                                class="el-select__caret el-input__icon el-icon-arrow-up"
                                                                                style=""></i><!----><!----><!----><!----><!----></span><i
                                                                            class="el-input__icon el-input__validateIcon el-icon-circle-check"></i></span><!----><!---->
                                                                </div>
                                                            </div><!---->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="el-col el-col-8">
                                                    <div
                                                        class="el-form-item is-success is-required el-form-item--small">
                                                        <label for="editBo.deviceName" class="el-form-item__label"
                                                            style="width: 140px;">用电器名称</label>
                                                        <div class="el-form-item__content" style="margin-left: 140px;">
                                                            <div class="el-select el-select--small"
                                                                style="width: 100%;"><!---->
                                                                <div
                                                                    class="el-input el-input--small el-input--suffix is-focus">
                                                                    <!----><input type="text" autocomplete="off"
                                                                        placeholder="点烟器背光" class="el-input__inner"
                                                                        style="height: 31.9965px;"><!----><span
                                                                        class="el-input__suffix"><span
                                                                            class="el-input__suffix-inner"><i
                                                                                class="el-select__caret el-input__icon el-icon-arrow-up is-reverse"
                                                                                style=""></i><!----><!----><!----><!----><!----></span><i
                                                                            class="el-input__icon el-input__validateIcon el-icon-circle-check"></i></span><!----><!---->
                                                                </div>
                                                            </div><!---->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="el-col el-col-8">
                                                    <div class="el-form-item is-error is-required el-form-item--small">
                                                        <label for="editBo.devicePartNumber" class="el-form-item__label"
                                                            style="width: 140px;">用电器零件号</label>
                                                        <div class="el-form-item__content" style="margin-left: 140px;">
                                                            <div class="el-tooltip item el-input el-input--small"
                                                                aria-describedby="el-tooltip-4041" tabindex="0">
                                                                <!----><input type="text" autocomplete="off"
                                                                    placeholder="请输入用电器零件号"
                                                                    class="el-input__inner"><!----><!----><!----><!---->
                                                            </div>
                                                            <div class="el-form-item__error"> 请输入用电器名称 </div>
                                                        </div>
                                                    </div>
                                                </div><!----><!---->
                                                <div class="el-col el-col-8">
                                                    <div class="el-form-item is-error is-required el-form-item--small">
                                                        <label for="editBo.productDescription"
                                                            class="el-form-item__label"
                                                            style="width: 140px;">适用配置</label>
                                                        <div class="el-form-item__content" style="margin-left: 140px;">
                                                            <div class="el-input el-input--small"><!----><input
                                                                    type="text" autocomplete="off" placeholder="请输入适用配置"
                                                                    class="el-input__inner"><!----><!----><!----><!---->
                                                            </div>
                                                            <div class="el-form-item__error"> 请输入适用配置 </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="el-row"><button type="button"
                                                    class="el-button el-button--primary el-button--mini"><!----><i
                                                        class="el-icon-document"></i><span> 复制已完成的"IDC"单数据
                                                    </span></button></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="el-collapse-item is-active">
                                    <div role="tab" aria-expanded="true" aria-controls="el-collapse-content-6206"
                                        aria-describedby="el-collapse-content-6206">
                                        <div role="button" id="el-collapse-head-6206" tabindex="0"
                                            class="el-collapse-item__header is-active"><i class="el-icon-document"></i>
                                            接插件信息( 提交前请再次检查此处 ) <i
                                                class="el-collapse-item__arrow el-icon-arrow-right is-active"></i></div>
                                    </div>
                                    <div role="tabpanel" aria-labelledby="el-collapse-head-6206"
                                        id="el-collapse-content-6206" class="el-collapse-item__wrap">
                                        <div class="el-collapse-item__content">
                                            <div class="el-row" style="margin-left: -5px; margin-right: -5px;">
                                                <div class="el-col el-col-1.5"
                                                    style="padding-left: 5px; padding-right: 5px;"><button type="button"
                                                        class="el-button el-button--primary el-button--small"><!----><i
                                                            class="el-icon-plus"></i><span> 新增 </span></button></div>
                                                <div class="el-col el-col-1.5"
                                                    style="padding-left: 5px; padding-right: 5px;"><span
                                                        class="excelReader"><button type="button"
                                                            class="el-button el-button--primary el-button--small is-plain"><!----><i
                                                                class="el-icon-upload"></i><span> 批量导入 </span></button>
                                                        <div class="el-dialog__wrapper" style="display: none;">
                                                            <div role="dialog" aria-modal="true" aria-label="批量导入"
                                                                class="el-dialog"
                                                                style="margin-top: 15vh; width: 400px;">
                                                                <div class="el-dialog__header"><span
                                                                        class="el-dialog__title">批量导入</span><button
                                                                        type="button" aria-label="Close"
                                                                        class="el-dialog__headerbtn"><i
                                                                            class="el-dialog__close el-icon el-icon-close"></i></button>
                                                                </div><!----><!---->
                                                            </div>
                                                        </div>
                                                    </span></div>
                                            </div>
                                            <div
                                                class="el-table el-table--fit el-table--border el-table--scrollable-x el-table--small">
                                                <div class="hidden-columns">
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                </div>
                                                <div class="el-table__header-wrapper">
                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                        class="el-table__header" style="width: 1310px;">
                                                        <colgroup>
                                                            <col name="el-table_8_column_87" width="60">
                                                            <col name="el-table_8_column_88" width="100">
                                                            <col name="el-table_8_column_89" width="100">
                                                            <col name="el-table_8_column_90" width="100">
                                                            <col name="el-table_8_column_91" width="100">
                                                            <col name="el-table_8_column_92" width="100">
                                                            <col name="el-table_8_column_93" width="100">
                                                            <col name="el-table_8_column_94" width="100">
                                                            <col name="el-table_8_column_95" width="100">
                                                            <col name="el-table_8_column_96" width="100">
                                                            <col name="el-table_8_column_97" width="100">
                                                            <col name="el-table_8_column_98" width="100">
                                                            <col name="el-table_8_column_99" width="150">
                                                            <col name="gutter" width="0">
                                                        </colgroup>
                                                        <thead class="has-gutter">
                                                            <tr class="">
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_8_column_87 is-center is-leaf el-table__cell">
                                                                    <div class="cell">序号</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_8_column_88 is-center is-leaf el-table__cell">
                                                                    <div class="cell">是否平台化</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_8_column_89 is-center is-leaf el-table__cell">
                                                                    <div class="cell">是否自开模</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_8_column_90 is-center is-leaf el-table__cell">
                                                                    <div class="cell">自开模供应商</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_8_column_91 is-center is-leaf el-table__cell">
                                                                    <div class="cell">用电器端护套原件供应商</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_8_column_92 is-center is-leaf el-table__cell">
                                                                    <div class="cell">用电器端护套原件型号</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_8_column_93 is-center is-leaf el-table__cell">
                                                                    <div class="cell">用电器端端子原件供应商</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_8_column_94 is-center is-leaf el-table__cell">
                                                                    <div class="cell">用电器端端子原件型号</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_8_column_95 is-center is-leaf el-table__cell">
                                                                    <div class="cell">线束端护套原件供应商</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_8_column_96 is-center is-leaf el-table__cell">
                                                                    <div class="cell">线束端护套原件型号</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_8_column_97 is-center is-leaf el-table__cell">
                                                                    <div class="cell">线束端端子原件供应商</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_8_column_98 is-center is-leaf el-table__cell">
                                                                    <div class="cell">线束端端子原件型号</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_8_column_99 is-center is-hidden is-leaf el-table__cell">
                                                                    <div class="cell">操作</div>
                                                                </th>
                                                                <th class="el-table__cell gutter"
                                                                    style="width: 0px; display: none;"></th>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div class="el-table__body-wrapper is-scrolling-left">
                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                        class="el-table__body" style="width: 1310px;">
                                                        <colgroup>
                                                            <col name="el-table_8_column_87" width="60">
                                                            <col name="el-table_8_column_88" width="100">
                                                            <col name="el-table_8_column_89" width="100">
                                                            <col name="el-table_8_column_90" width="100">
                                                            <col name="el-table_8_column_91" width="100">
                                                            <col name="el-table_8_column_92" width="100">
                                                            <col name="el-table_8_column_93" width="100">
                                                            <col name="el-table_8_column_94" width="100">
                                                            <col name="el-table_8_column_95" width="100">
                                                            <col name="el-table_8_column_96" width="100">
                                                            <col name="el-table_8_column_97" width="100">
                                                            <col name="el-table_8_column_98" width="100">
                                                            <col name="el-table_8_column_99" width="150">
                                                        </colgroup>
                                                        <tbody><!----></tbody>
                                                    </table>
                                                    <div class="el-table__empty-block"
                                                        style="height: 100%; width: 1310px;"><span
                                                            class="el-table__empty-text">暂无数据</span></div><!---->
                                                </div><!----><!---->
                                                <div class="el-table__fixed-right" style="width: 150px; height: 140px;">
                                                    <div class="el-table__fixed-header-wrapper">
                                                        <table cellspacing="0" cellpadding="0" border="0"
                                                            class="el-table__header" style="width: 1310px;">
                                                            <colgroup>
                                                                <col name="el-table_8_column_87" width="60">
                                                                <col name="el-table_8_column_88" width="100">
                                                                <col name="el-table_8_column_89" width="100">
                                                                <col name="el-table_8_column_90" width="100">
                                                                <col name="el-table_8_column_91" width="100">
                                                                <col name="el-table_8_column_92" width="100">
                                                                <col name="el-table_8_column_93" width="100">
                                                                <col name="el-table_8_column_94" width="100">
                                                                <col name="el-table_8_column_95" width="100">
                                                                <col name="el-table_8_column_96" width="100">
                                                                <col name="el-table_8_column_97" width="100">
                                                                <col name="el-table_8_column_98" width="100">
                                                                <col name="el-table_8_column_99" width="150">
                                                            </colgroup>
                                                            <thead class="">
                                                                <tr class="">
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_8_column_87 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">序号</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_8_column_88 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">是否平台化</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_8_column_89 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">是否自开模</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_8_column_90 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">自开模供应商</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_8_column_91 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">用电器端护套原件供应商</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_8_column_92 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">用电器端护套原件型号</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_8_column_93 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">用电器端端子原件供应商</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_8_column_94 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">用电器端端子原件型号</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_8_column_95 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">线束端护套原件供应商</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_8_column_96 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">线束端护套原件型号</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_8_column_97 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">线束端端子原件供应商</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_8_column_98 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">线束端端子原件型号</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_8_column_99 is-center is-leaf el-table__cell">
                                                                        <div class="cell">操作</div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                        </table>
                                                    </div>
                                                    <div class="el-table__fixed-body-wrapper" style="top: 63px;">
                                                        <table cellspacing="0" cellpadding="0" border="0"
                                                            class="el-table__body" style="width: 1310px;">
                                                            <colgroup>
                                                                <col name="el-table_8_column_87" width="60">
                                                                <col name="el-table_8_column_88" width="100">
                                                                <col name="el-table_8_column_89" width="100">
                                                                <col name="el-table_8_column_90" width="100">
                                                                <col name="el-table_8_column_91" width="100">
                                                                <col name="el-table_8_column_92" width="100">
                                                                <col name="el-table_8_column_93" width="100">
                                                                <col name="el-table_8_column_94" width="100">
                                                                <col name="el-table_8_column_95" width="100">
                                                                <col name="el-table_8_column_96" width="100">
                                                                <col name="el-table_8_column_97" width="100">
                                                                <col name="el-table_8_column_98" width="100">
                                                                <col name="el-table_8_column_99" width="150">
                                                            </colgroup>
                                                            <tbody><!----></tbody>
                                                        </table><!---->
                                                    </div><!---->
                                                </div>
                                                <div class="el-table__fixed-right-patch"
                                                    style="width: 0px; height: 63px;"></div>
                                                <div class="el-table__column-resize-proxy" style="display: none;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="el-collapse-item is-active">
                                    <div role="tab" aria-expanded="true" aria-controls="el-collapse-content-7479"
                                        aria-describedby="el-collapse-content-7479">
                                        <div role="button" id="el-collapse-head-7479" tabindex="0"
                                            class="el-collapse-item__header is-active"><i class="el-icon-document"></i>
                                            接插件PIN脚定义图 <i
                                                class="el-collapse-item__arrow el-icon-arrow-right is-active"></i></div>
                                    </div>
                                    <div role="tabpanel" aria-labelledby="el-collapse-head-7479"
                                        id="el-collapse-content-7479" class="el-collapse-item__wrap">
                                        <div class="el-collapse-item__content">
                                            <div>
                                                <div class="info-contatner">
                                                    <div class="left info-box">
                                                        <p>Note备注</p>
                                                        <p>1、请列出所有PIN脚的视图；</p>
                                                        <p> 2、请使用下图一样的视角方向，锁止结构朝上，从连接器的对插端看，用电器端编号规律为从右到左，从上到下，线束端编号规律为从左到右，从上到下；
                                                        </p>
                                                        <p> 3、若用电器端针脚编号规律与以下视图不同，请填写与线束端视图对应的编号。 </p>
                                                        <!-- <img
                                                            src="/tpc/static/img/shitu2.49521700.png"
                                                            style="width: 100%;"> -->
                                                    </div>
                                                    <div class="center info-box">
                                                        <p>用电器端视图<span style="color: red;"></span></p>
                                                        <div style="min-height: 375px;"><!----></div>
                                                        <div action="" name="files">
                                                            <div class="el-sgmw-upload">
                                                                <div tabindex="0" class="el-upload el-upload--text">
                                                                    <!----><button type="button"
                                                                        class="el-button el-button--primary el-button--mini"><!----><i
                                                                            class="el-icon-upload2"></i><span>选择文件</span></button><!----><input
                                                                        type="file" name="files"
                                                                        accept=".jpg,.gif,.bmp,.png,.JPG,.GIF,.BMP,.PNG"
                                                                        class="el-upload__input"></div>
                                                            </div><!---->
                                                            <div class="el-dialog__wrapper" style="display: none;">
                                                                <div role="dialog" aria-modal="true"
                                                                    aria-label="是否确认上传文件" class="el-dialog"
                                                                    style="margin-top: 15vh; width: 400px;">
                                                                    <div class="el-dialog__header"><span
                                                                            class="el-dialog__title">是否确认上传文件</span><button
                                                                            type="button" aria-label="Close"
                                                                            class="el-dialog__headerbtn"><i
                                                                                class="el-dialog__close el-icon el-icon-close"></i></button>
                                                                    </div><!---->
                                                                    <div class="el-dialog__footer">
                                                                        <div class="dialog-footer"><button type="button"
                                                                                class="el-button el-button--default el-button--small"><!----><!----><span>取
                                                                                    消</span></button><button
                                                                                type="button"
                                                                                class="el-button el-button--primary el-button--small"><!----><!----><span>上
                                                                                    传</span></button></div>
                                                                    </div>
                                                                </div>
                                                            </div><!---->
                                                        </div>
                                                        <div> 上传图片格式为.jpg, .gif, .bmp,.png,图片大小不得超过8M </div>
                                                    </div>
                                                    <div class="right info-box">
                                                        <p>线束端视图<span style="color: red;"></span></p>
                                                        <div style="min-height: 375px;"><!----></div>
                                                        <div action="" name="files">
                                                            <div class="el-sgmw-upload">
                                                                <div tabindex="0" class="el-upload el-upload--text">
                                                                    <!----><button type="button"
                                                                        class="el-button el-button--primary el-button--mini"><!----><i
                                                                            class="el-icon-upload2"></i><span>选择文件</span></button><!----><input
                                                                        type="file" name="files"
                                                                        accept=".jpg,.gif,.bmp,.png,.JPG,.GIF,.BMP,.PNG"
                                                                        class="el-upload__input"></div>
                                                            </div><!---->
                                                            <div class="el-dialog__wrapper" style="display: none;">
                                                                <div role="dialog" aria-modal="true"
                                                                    aria-label="是否确认上传文件" class="el-dialog"
                                                                    style="margin-top: 15vh; width: 400px;">
                                                                    <div class="el-dialog__header"><span
                                                                            class="el-dialog__title">是否确认上传文件</span><button
                                                                            type="button" aria-label="Close"
                                                                            class="el-dialog__headerbtn"><i
                                                                                class="el-dialog__close el-icon el-icon-close"></i></button>
                                                                    </div><!---->
                                                                    <div class="el-dialog__footer">
                                                                        <div class="dialog-footer"><button type="button"
                                                                                class="el-button el-button--default el-button--small"><!----><!----><span>取
                                                                                    消</span></button><button
                                                                                type="button"
                                                                                class="el-button el-button--primary el-button--small"><!----><!----><span>上
                                                                                    传</span></button></div>
                                                                    </div>
                                                                </div>
                                                            </div><!---->
                                                        </div>
                                                        <div> 上传图片格式为.jpg, .gif, .bmp,.png,图片大小不得超过8M </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="el-collapse-item is-active">
                                    <div role="tab" aria-expanded="true" aria-controls="el-collapse-content-3729"
                                        aria-describedby="el-collapse-content-3729">
                                        <div role="button" id="el-collapse-head-3729" tabindex="0"
                                            class="el-collapse-item__header is-active"><i class="el-icon-document"></i>
                                            连接器PIN脚信息( 提交前请再次检查此处 ) <i
                                                class="el-collapse-item__arrow el-icon-arrow-right is-active"></i></div>
                                    </div>
                                    <div role="tabpanel" aria-labelledby="el-collapse-head-3729"
                                        id="el-collapse-content-3729" class="el-collapse-item__wrap">
                                        <div class="el-collapse-item__content">
                                            <div class="el-row" style="margin-left: -5px; margin-right: -5px;">
                                                <div class="el-col el-col-1.5"
                                                    style="padding-left: 5px; padding-right: 5px;"><button type="button"
                                                        class="el-button el-button--primary el-button--small"><!----><i
                                                            class="el-icon-plus"></i><span> 新增 </span></button></div>
                                                <div class="el-col el-col-1.5"
                                                    style="padding-left: 5px; padding-right: 5px;"><span
                                                        class="excelReader"><button type="button"
                                                            class="el-button el-button--primary el-button--small is-plain"><!----><i
                                                                class="el-icon-upload"></i><span> 批量导入 </span></button>
                                                        <div class="el-dialog__wrapper" style="display: none;">
                                                            <div role="dialog" aria-modal="true" aria-label="批量导入"
                                                                class="el-dialog"
                                                                style="margin-top: 15vh; width: 400px;">
                                                                <div class="el-dialog__header"><span
                                                                        class="el-dialog__title">批量导入</span><button
                                                                        type="button" aria-label="Close"
                                                                        class="el-dialog__headerbtn"><i
                                                                            class="el-dialog__close el-icon el-icon-close"></i></button>
                                                                </div><!----><!---->
                                                            </div>
                                                        </div>
                                                    </span></div>
                                                <div class="el-col el-col-1.5"
                                                    style="padding-left: 5px; padding-right: 5px;"><button type="button"
                                                        class="el-button el-button--primary el-button--small is-plain"><!----><i
                                                            class="el-icon-download"></i><span> 导出Excel </span></button>
                                                </div>
                                            </div>
                                            <div
                                                class="el-table el-table--fit el-table--border el-table--scrollable-x el-table--small">
                                                <div class="hidden-columns">
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                </div>
                                                <div class="el-table__header-wrapper">
                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                        class="el-table__header" style="width: 1720px;">
                                                        <colgroup>
                                                            <col name="el-table_9_column_100" width="60">
                                                            <col name="el-table_9_column_101" width="90">
                                                            <col name="el-table_9_column_102" width="100">
                                                            <col name="el-table_9_column_103" width="100">
                                                            <col name="el-table_9_column_104" width="90">
                                                            <col name="el-table_9_column_105" width="100">
                                                            <col name="el-table_9_column_106" width="100">
                                                            <col name="el-table_9_column_107" width="70">
                                                            <col name="el-table_9_column_108" width="100">
                                                            <col name="el-table_9_column_109" width="110">
                                                            <col name="el-table_9_column_110" width="100">
                                                            <col name="el-table_9_column_111" width="100">
                                                            <col name="el-table_9_column_112" width="100">
                                                            <col name="el-table_9_column_113" width="110">
                                                            <col name="el-table_9_column_114" width="110">
                                                            <col name="el-table_9_column_115" width="70">
                                                            <col name="el-table_9_column_116" width="60">
                                                            <col name="el-table_9_column_117" width="150">
                                                            <col name="gutter" width="0">
                                                        </colgroup>
                                                        <thead class="has-gutter">
                                                            <tr class="">
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_9_column_100 is-center is-leaf el-table__cell">
                                                                    <div class="cell">序号</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_9_column_101 is-center is-leaf el-table__cell">
                                                                    <div class="cell">连接器序号</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_9_column_102 is-center is-leaf el-table__cell">
                                                                    <div class="cell">孔位/管脚编号</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_9_column_103 is-center is-leaf el-table__cell">
                                                                    <div class="cell">与线束端视图对应的编号</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_9_column_104 is-center is-leaf el-table__cell">
                                                                    <div class="cell">信号描述及对应配置</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_9_column_105 is-center is-leaf el-table__cell">
                                                                    <div class="cell">工作电压范围-最小值（V）</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_9_column_106 is-center is-leaf el-table__cell">
                                                                    <div class="cell">工作电压范围-最大值（V）</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_9_column_107 is-center is-leaf el-table__cell">
                                                                    <div class="cell">静态电流（mA）</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_9_column_108 is-center is-leaf el-table__cell">
                                                                    <div class="cell">工作档位</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_9_column_109 is-center is-leaf el-table__cell">
                                                                    <div class="cell">稳定工作状态电流负载（A）</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_9_column_110 is-center is-leaf el-table__cell">
                                                                    <div class="cell">推荐保险丝规格（A）</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_9_column_111 is-center is-leaf el-table__cell">
                                                                    <div class="cell">导线线径要求（mm²）</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_9_column_112 is-center is-leaf el-table__cell">
                                                                    <div class="cell">回路的电阻要求（mΩ）</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_9_column_113 is-center is-leaf el-table__cell">
                                                                    <div class="cell">特殊电缆（双绞/屏蔽/编织电缆）</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_9_column_114 is-center is-leaf el-table__cell">
                                                                    <div class="cell">堵转电流（25℃ 12V amps）</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_9_column_115 is-center is-leaf el-table__cell">
                                                                    <div class="cell">冲击电流</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_9_column_116 is-center is-leaf el-table__cell">
                                                                    <div class="cell">是否有自保护</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_9_column_117 is-center is-hidden is-leaf el-table__cell">
                                                                    <div class="cell">操作</div>
                                                                </th>
                                                                <th class="el-table__cell gutter"
                                                                    style="width: 0px; display: none;"></th>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div class="el-table__body-wrapper is-scrolling-left">
                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                        class="el-table__body" style="width: 1720px;">
                                                        <colgroup>
                                                            <col name="el-table_9_column_100" width="60">
                                                            <col name="el-table_9_column_101" width="90">
                                                            <col name="el-table_9_column_102" width="100">
                                                            <col name="el-table_9_column_103" width="100">
                                                            <col name="el-table_9_column_104" width="90">
                                                            <col name="el-table_9_column_105" width="100">
                                                            <col name="el-table_9_column_106" width="100">
                                                            <col name="el-table_9_column_107" width="70">
                                                            <col name="el-table_9_column_108" width="100">
                                                            <col name="el-table_9_column_109" width="110">
                                                            <col name="el-table_9_column_110" width="100">
                                                            <col name="el-table_9_column_111" width="100">
                                                            <col name="el-table_9_column_112" width="100">
                                                            <col name="el-table_9_column_113" width="110">
                                                            <col name="el-table_9_column_114" width="110">
                                                            <col name="el-table_9_column_115" width="70">
                                                            <col name="el-table_9_column_116" width="60">
                                                            <col name="el-table_9_column_117" width="150">
                                                        </colgroup>
                                                        <tbody><!----></tbody>
                                                    </table>
                                                    <div class="el-table__empty-block"
                                                        style="height: 100%; width: 1720px;"><span
                                                            class="el-table__empty-text">暂无数据</span></div><!---->
                                                </div><!----><!---->
                                                <div class="el-table__fixed-right" style="width: 150px; height: 140px;">
                                                    <div class="el-table__fixed-header-wrapper">
                                                        <table cellspacing="0" cellpadding="0" border="0"
                                                            class="el-table__header" style="width: 1720px;">
                                                            <colgroup>
                                                                <col name="el-table_9_column_100" width="60">
                                                                <col name="el-table_9_column_101" width="90">
                                                                <col name="el-table_9_column_102" width="100">
                                                                <col name="el-table_9_column_103" width="100">
                                                                <col name="el-table_9_column_104" width="90">
                                                                <col name="el-table_9_column_105" width="100">
                                                                <col name="el-table_9_column_106" width="100">
                                                                <col name="el-table_9_column_107" width="70">
                                                                <col name="el-table_9_column_108" width="100">
                                                                <col name="el-table_9_column_109" width="110">
                                                                <col name="el-table_9_column_110" width="100">
                                                                <col name="el-table_9_column_111" width="100">
                                                                <col name="el-table_9_column_112" width="100">
                                                                <col name="el-table_9_column_113" width="110">
                                                                <col name="el-table_9_column_114" width="110">
                                                                <col name="el-table_9_column_115" width="70">
                                                                <col name="el-table_9_column_116" width="60">
                                                                <col name="el-table_9_column_117" width="150">
                                                            </colgroup>
                                                            <thead class="">
                                                                <tr class="">
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_9_column_100 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">序号</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_9_column_101 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">连接器序号</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_9_column_102 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">孔位/管脚编号</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_9_column_103 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">与线束端视图对应的编号</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_9_column_104 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">信号描述及对应配置</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_9_column_105 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">工作电压范围-最小值（V）</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_9_column_106 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">工作电压范围-最大值（V）</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_9_column_107 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">静态电流（mA）</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_9_column_108 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">工作档位</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_9_column_109 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">稳定工作状态电流负载（A）</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_9_column_110 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">推荐保险丝规格（A）</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_9_column_111 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">导线线径要求（mm²）</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_9_column_112 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">回路的电阻要求（mΩ）</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_9_column_113 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">特殊电缆（双绞/屏蔽/编织电缆）</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_9_column_114 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">堵转电流（25℃ 12V amps）</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_9_column_115 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">冲击电流</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_9_column_116 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">是否有自保护</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_9_column_117 is-center is-leaf el-table__cell">
                                                                        <div class="cell">操作</div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                        </table>
                                                    </div>
                                                    <div class="el-table__fixed-body-wrapper" style="top: 63px;">
                                                        <table cellspacing="0" cellpadding="0" border="0"
                                                            class="el-table__body" style="width: 1720px;">
                                                            <colgroup>
                                                                <col name="el-table_9_column_100" width="60">
                                                                <col name="el-table_9_column_101" width="90">
                                                                <col name="el-table_9_column_102" width="100">
                                                                <col name="el-table_9_column_103" width="100">
                                                                <col name="el-table_9_column_104" width="90">
                                                                <col name="el-table_9_column_105" width="100">
                                                                <col name="el-table_9_column_106" width="100">
                                                                <col name="el-table_9_column_107" width="70">
                                                                <col name="el-table_9_column_108" width="100">
                                                                <col name="el-table_9_column_109" width="110">
                                                                <col name="el-table_9_column_110" width="100">
                                                                <col name="el-table_9_column_111" width="100">
                                                                <col name="el-table_9_column_112" width="100">
                                                                <col name="el-table_9_column_113" width="110">
                                                                <col name="el-table_9_column_114" width="110">
                                                                <col name="el-table_9_column_115" width="70">
                                                                <col name="el-table_9_column_116" width="60">
                                                                <col name="el-table_9_column_117" width="150">
                                                            </colgroup>
                                                            <tbody><!----></tbody>
                                                        </table><!---->
                                                    </div><!---->
                                                </div>
                                                <div class="el-table__fixed-right-patch"
                                                    style="width: 0px; height: 63px;"></div>
                                                <div class="el-table__column-resize-proxy" style="display: none;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="el-collapse-item is-active">
                                    <div role="tab" aria-expanded="true" aria-controls="el-collapse-content-4497"
                                        aria-describedby="el-collapse-content-4497">
                                        <div role="button" id="el-collapse-head-4497" tabindex="0"
                                            class="el-collapse-item__header is-active"><i class="el-icon-document"></i>
                                            更改记录 <i class="el-collapse-item__arrow el-icon-arrow-right is-active"></i>
                                        </div>
                                    </div>
                                    <div role="tabpanel" aria-labelledby="el-collapse-head-4497"
                                        id="el-collapse-content-4497" class="el-collapse-item__wrap">
                                        <div class="el-collapse-item__content">
                                            <div class="el-row" style="margin-left: -5px; margin-right: -5px;">
                                                <div class="el-col el-col-1.5"
                                                    style="padding-left: 5px; padding-right: 5px;"><button type="button"
                                                        class="el-button el-button--primary el-button--small"><!----><i
                                                            class="el-icon-plus"></i><span> 新增 </span></button></div>
                                            </div>
                                            <div class="el-table el-table--fit el-table--border el-table--small">
                                                <div class="hidden-columns">
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                </div>
                                                <div class="el-table__header-wrapper">
                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                        class="el-table__header" style="width: 824px;">
                                                        <colgroup>
                                                            <col name="el-table_10_column_118" width="60">
                                                            <col name="el-table_10_column_119" width="155">
                                                            <col name="el-table_10_column_120" width="153">
                                                            <col name="el-table_10_column_121" width="153">
                                                            <col name="el-table_10_column_122" width="153">
                                                            <col name="el-table_10_column_123" width="150">
                                                            <col name="gutter" width="0">
                                                        </colgroup>
                                                        <thead class="has-gutter">
                                                            <tr class="">
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_10_column_118 is-center is-leaf el-table__cell">
                                                                    <div class="cell">序号</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_10_column_119 is-center is-leaf el-table__cell">
                                                                    <div class="cell">更改时间</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_10_column_120 is-center is-leaf el-table__cell">
                                                                    <div class="cell">更改内容</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_10_column_121 is-center is-leaf el-table__cell">
                                                                    <div class="cell">具体描述</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_10_column_122 is-center is-leaf el-table__cell">
                                                                    <div class="cell">要求实施阶段</div>
                                                                </th>
                                                                <th colspan="1" rowspan="1"
                                                                    class="el-table_10_column_123 is-center is-hidden is-leaf el-table__cell">
                                                                    <div class="cell">操作</div>
                                                                </th>
                                                                <th class="el-table__cell gutter"
                                                                    style="width: 0px; display: none;"></th>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div class="el-table__body-wrapper is-scrolling-none">
                                                    <table cellspacing="0" cellpadding="0" border="0"
                                                        class="el-table__body" style="width: 824px;">
                                                        <colgroup>
                                                            <col name="el-table_10_column_118" width="60">
                                                            <col name="el-table_10_column_119" width="155">
                                                            <col name="el-table_10_column_120" width="153">
                                                            <col name="el-table_10_column_121" width="153">
                                                            <col name="el-table_10_column_122" width="153">
                                                            <col name="el-table_10_column_123" width="150">
                                                        </colgroup>
                                                        <tbody><!----></tbody>
                                                    </table>
                                                    <div class="el-table__empty-block"
                                                        style="height: 100%; width: 824px;"><span
                                                            class="el-table__empty-text">暂无数据</span></div><!---->
                                                </div><!----><!---->
                                                <div class="el-table__fixed-right" style="width: 150px; height: 100px;">
                                                    <div class="el-table__fixed-header-wrapper">
                                                        <table cellspacing="0" cellpadding="0" border="0"
                                                            class="el-table__header" style="width: 824px;">
                                                            <colgroup>
                                                                <col name="el-table_10_column_118" width="60">
                                                                <col name="el-table_10_column_119" width="155">
                                                                <col name="el-table_10_column_120" width="153">
                                                                <col name="el-table_10_column_121" width="153">
                                                                <col name="el-table_10_column_122" width="153">
                                                                <col name="el-table_10_column_123" width="150">
                                                            </colgroup>
                                                            <thead class="">
                                                                <tr class="">
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_10_column_118 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">序号</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_10_column_119 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">更改时间</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_10_column_120 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">更改内容</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_10_column_121 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">具体描述</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_10_column_122 is-center is-hidden is-leaf el-table__cell">
                                                                        <div class="cell">要求实施阶段</div>
                                                                    </th>
                                                                    <th colspan="1" rowspan="1"
                                                                        class="el-table_10_column_123 is-center is-leaf el-table__cell">
                                                                        <div class="cell">操作</div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                        </table>
                                                    </div>
                                                    <div class="el-table__fixed-body-wrapper" style="top: 40px;">
                                                        <table cellspacing="0" cellpadding="0" border="0"
                                                            class="el-table__body" style="width: 824px;">
                                                            <colgroup>
                                                                <col name="el-table_10_column_118" width="60">
                                                                <col name="el-table_10_column_119" width="155">
                                                                <col name="el-table_10_column_120" width="153">
                                                                <col name="el-table_10_column_121" width="153">
                                                                <col name="el-table_10_column_122" width="153">
                                                                <col name="el-table_10_column_123" width="150">
                                                            </colgroup>
                                                            <tbody><!----></tbody>
                                                        </table><!---->
                                                    </div><!---->
                                                </div>
                                                <div class="el-table__fixed-right-patch"
                                                    style="width: 0px; height: 40px;"></div>
                                                <div class="el-table__column-resize-proxy" style="display: none;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="el-collapse-item is-active">
                                    <div role="tab" aria-expanded="true" aria-controls="el-collapse-content-60"
                                        aria-describedby="el-collapse-content-60">
                                        <div role="button" id="el-collapse-head-60" tabindex="0"
                                            class="el-collapse-item__header is-active"><i class="el-icon-document"></i>
                                            信息 <i class="el-collapse-item__arrow el-icon-arrow-right is-active"></i>
                                        </div>
                                    </div>
                                    <div role="tabpanel" aria-labelledby="el-collapse-head-60"
                                        id="el-collapse-content-60" class="el-collapse-item__wrap">
                                        <div class="el-collapse-item__content">
                                            <div class="msg-contatner">
                                                <div class="left msg-box">子系统电气原理图</div>
                                                <div class="center msg-box">
                                                    <div style="min-height: 110px; padding-top: 5px;"><!----></div>
                                                    <div action="" name="files">
                                                        <div class="el-sgmw-upload">
                                                            <div tabindex="0" class="el-upload el-upload--text">
                                                                <!----><button type="button"
                                                                    class="el-button el-button--primary el-button--mini"><!----><i
                                                                        class="el-icon-upload2"></i><span>选择文件</span></button><!----><input
                                                                    type="file" name="files" multiple="multiple"
                                                                    accept=".jpg,.gif,.bmp,.png,.JPG,.GIF,.BMP,.PNG"
                                                                    class="el-upload__input"></div>
                                                        </div><!---->
                                                        <div class="el-dialog__wrapper" style="display: none;">
                                                            <div role="dialog" aria-modal="true" aria-label="是否确认上传文件"
                                                                class="el-dialog"
                                                                style="margin-top: 15vh; width: 400px;">
                                                                <div class="el-dialog__header"><span
                                                                        class="el-dialog__title">是否确认上传文件</span><button
                                                                        type="button" aria-label="Close"
                                                                        class="el-dialog__headerbtn"><i
                                                                            class="el-dialog__close el-icon el-icon-close"></i></button>
                                                                </div><!---->
                                                                <div class="el-dialog__footer">
                                                                    <div class="dialog-footer"><button type="button"
                                                                            class="el-button el-button--default el-button--small"><!----><!----><span>取
                                                                                消</span></button><button type="button"
                                                                            class="el-button el-button--primary el-button--small"><!----><!----><span>上
                                                                                传</span></button></div>
                                                                </div>
                                                            </div>
                                                        </div><!---->
                                                    </div>
                                                    <div> 上传图片格式为.jpg, .gif, .bmp,.png,图片大小不得超过8M </div>
                                                </div>
                                            </div>
                                            <div class="msg-contatner">
                                                <div class="left msg-box">负载电流曲线</div>
                                                <div class="center msg-box">
                                                    <div style="min-height: 110px; padding-top: 5px;"><!----></div>
                                                    <div action="" name="files">
                                                        <div class="el-sgmw-upload">
                                                            <div tabindex="0" class="el-upload el-upload--text">
                                                                <!----><button type="button"
                                                                    class="el-button el-button--primary el-button--mini"><!----><i
                                                                        class="el-icon-upload2"></i><span>选择文件</span></button><!----><input
                                                                    type="file" name="files" multiple="multiple"
                                                                    accept=".jpg,.gif,.bmp,.png,.JPG,.GIF,.BMP,.PNG"
                                                                    class="el-upload__input"></div>
                                                        </div><!---->
                                                        <div class="el-dialog__wrapper" style="display: none;">
                                                            <div role="dialog" aria-modal="true" aria-label="是否确认上传文件"
                                                                class="el-dialog"
                                                                style="margin-top: 15vh; width: 400px;">
                                                                <div class="el-dialog__header"><span
                                                                        class="el-dialog__title">是否确认上传文件</span><button
                                                                        type="button" aria-label="Close"
                                                                        class="el-dialog__headerbtn"><i
                                                                            class="el-dialog__close el-icon el-icon-close"></i></button>
                                                                </div><!---->
                                                                <div class="el-dialog__footer">
                                                                    <div class="dialog-footer"><button type="button"
                                                                            class="el-button el-button--default el-button--small"><!----><!----><span>取
                                                                                消</span></button><button type="button"
                                                                            class="el-button el-button--primary el-button--small"><!----><!----><span>上
                                                                                传</span></button></div>
                                                                </div>
                                                            </div>
                                                        </div><!---->
                                                    </div>
                                                    <div> 上传图片格式为.jpg, .gif, .bmp,.png,图片大小不得超过8M </div>
                                                </div>
                                            </div>
                                            <div class="msg-contatner">
                                                <div class="left msg-box">冲击电流曲线</div>
                                                <div class="center msg-box">
                                                    <div style="min-height: 110px; padding-top: 5px;"><!----></div>
                                                    <div action="" name="files">
                                                        <div class="el-sgmw-upload">
                                                            <div tabindex="0" class="el-upload el-upload--text">
                                                                <!----><button type="button"
                                                                    class="el-button el-button--primary el-button--mini"><!----><i
                                                                        class="el-icon-upload2"></i><span>选择文件</span></button><!----><input
                                                                    type="file" name="files" multiple="multiple"
                                                                    accept=".jpg,.gif,.bmp,.png,.JPG,.GIF,.BMP,.PNG"
                                                                    class="el-upload__input"></div>
                                                        </div><!---->
                                                        <div class="el-dialog__wrapper" style="display: none;">
                                                            <div role="dialog" aria-modal="true" aria-label="是否确认上传文件"
                                                                class="el-dialog"
                                                                style="margin-top: 15vh; width: 400px;">
                                                                <div class="el-dialog__header"><span
                                                                        class="el-dialog__title">是否确认上传文件</span><button
                                                                        type="button" aria-label="Close"
                                                                        class="el-dialog__headerbtn"><i
                                                                            class="el-dialog__close el-icon el-icon-close"></i></button>
                                                                </div><!---->
                                                                <div class="el-dialog__footer">
                                                                    <div class="dialog-footer"><button type="button"
                                                                            class="el-button el-button--default el-button--small"><!----><!----><span>取
                                                                                消</span></button><button type="button"
                                                                            class="el-button el-button--primary el-button--small"><!----><!----><span>上
                                                                                传</span></button></div>
                                                                </div>
                                                            </div>
                                                        </div><!---->
                                                    </div>
                                                    <div> 上传图片格式为.jpg, .gif, .bmp,.png,图片大小不得超过8M </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="el-collapse-item is-active">
                                    <div role="tab" aria-expanded="true" aria-controls="el-collapse-content-1363"
                                        aria-describedby="el-collapse-content-1363">
                                        <div role="button" id="el-collapse-head-1363" tabindex="0"
                                            class="el-collapse-item__header is-active"><i class="el-icon-document"></i>
                                            流程审批人 <i class="el-collapse-item__arrow el-icon-arrow-right is-active"></i>
                                        </div>
                                    </div>
                                    <div role="tabpanel" aria-labelledby="el-collapse-head-1363"
                                        id="el-collapse-content-1363" class="el-collapse-item__wrap">
                                        <div class="el-collapse-item__content">
                                            <div style="display: flex; flex-wrap: wrap;">
                                                <div class="el-form-item is-required el-form-item--small"
                                                    style="width: 33.33%;"><label for="editBo.deviceEngineer"
                                                        class="el-form-item__label" style="width: 140px;">用电器工程师</label>
                                                    <div class="el-form-item__content" style="margin-left: 140px;">
                                                        <div class="el-input el-input--small el-input-group el-input-group--append"
                                                            style="width: 100%;"><!----><input type="text"
                                                                readonly="readonly" autocomplete="off"
                                                                placeholder="选择用电器工程师"
                                                                class="el-input__inner"><!----><!---->
                                                            <div class="el-input-group__append"><button type="button"
                                                                    class="el-button el-button--default el-button--small"><!----><i
                                                                        class="el-icon-search"></i><!----></button>
                                                            </div><!---->
                                                        </div><!---->
                                                    </div>
                                                </div>
                                                <div class="el-form-item is-required el-form-item--small"
                                                    style="width: 33.33%;"><label for="editBo.deviceDirectorEngineer"
                                                        class="el-form-item__label"
                                                        style="width: 140px;">用电器主任工程师</label>
                                                    <div class="el-form-item__content" style="margin-left: 140px;">
                                                        <div class="el-input el-input--small el-input-group el-input-group--append"
                                                            style="width: 100%;"><!----><input type="text"
                                                                readonly="readonly" autocomplete="off"
                                                                placeholder="选择用电器主任工程师"
                                                                class="el-input__inner"><!----><!---->
                                                            <div class="el-input-group__append"><button type="button"
                                                                    class="el-button el-button--default el-button--small"><!----><i
                                                                        class="el-icon-search"></i><!----></button>
                                                            </div><!---->
                                                        </div><!---->
                                                    </div>
                                                </div>
                                                <div class="el-form-item is-required el-form-item--small"
                                                    style="width: 33.33%;"><label for="editBo.deviceManager"
                                                        class="el-form-item__label"
                                                        style="width: 140px;">用电器科室经理</label>
                                                    <div class="el-form-item__content" style="margin-left: 140px;">
                                                        <div class="el-input el-input--small el-input-group el-input-group--append"
                                                            style="width: 100%;"><!----><input type="text"
                                                                readonly="readonly" autocomplete="off"
                                                                placeholder="选择用电器科室经理"
                                                                class="el-input__inner"><!----><!---->
                                                            <div class="el-input-group__append"><button type="button"
                                                                    class="el-button el-button--default el-button--small"><!----><i
                                                                        class="el-icon-search"></i><!----></button>
                                                            </div><!---->
                                                        </div><!---->
                                                    </div>
                                                </div>
                                                <div class="el-form-item is-required el-form-item--small"
                                                    style="width: 33.33%;"><label for="editBo.pmEngineer"
                                                        class="el-form-item__label"
                                                        style="width: 140px;">电源管理工程师</label>
                                                    <div class="el-form-item__content" style="margin-left: 140px;">
                                                        <div class="el-input el-input--small el-input-group el-input-group--append"
                                                            style="width: 100%;"><!----><input type="text"
                                                                readonly="readonly" autocomplete="off"
                                                                placeholder="选择电源管理工程师"
                                                                class="el-input__inner"><!----><!---->
                                                            <div class="el-input-group__append"><button type="button"
                                                                    class="el-button el-button--default el-button--small"><!----><i
                                                                        class="el-icon-search"></i><!----></button>
                                                            </div><!---->
                                                        </div><!---->
                                                    </div>
                                                </div>
                                                <div class="el-form-item is-required el-form-item--small"
                                                    style="width: 33.33%;"><label
                                                        for="editBo.harnessDirectorEngineerValue"
                                                        class="el-form-item__label"
                                                        style="width: 140px;">线束主任工程师</label>
                                                    <div class="el-form-item__content" style="margin-left: 140px;">
                                                        <div class="el-select el-select--small" style="width: 100%;">
                                                            <!---->
                                                            <div class="el-input el-input--small el-input--suffix">
                                                                <!----><input type="text" readonly="readonly"
                                                                    autocomplete="off" placeholder="请选择线束主任工程师"
                                                                    class="el-input__inner"><!----><span
                                                                    class="el-input__suffix"><span
                                                                        class="el-input__suffix-inner"><i
                                                                            class="el-select__caret el-input__icon el-icon-arrow-up"></i><!----><!----><!----><!----><!----></span><!----></span><!----><!---->
                                                            </div>
                                                            <div class="el-select-dropdown el-popper"
                                                                style="display: none; min-width: 135.885px;">
                                                                <div class="el-scrollbar" style="">
                                                                    <div class="el-select-dropdown__wrap el-scrollbar__wrap"
                                                                        style="margin-bottom: -17px; margin-right: -17px;">
                                                                        <ul
                                                                            class="el-scrollbar__view el-select-dropdown__list">
                                                                            <!---->
                                                                            <li class="el-select-dropdown__item">
                                                                                <span>何永利</span></li>
                                                                            <li class="el-select-dropdown__item">
                                                                                <span>何筱荣</span></li>
                                                                            <li class="el-select-dropdown__item">
                                                                                <span>刘典</span></li>
                                                                            <li class="el-select-dropdown__item">
                                                                                <span>徐铮</span></li>
                                                                            <li class="el-select-dropdown__item">
                                                                                <span>李北文</span></li>
                                                                            <li class="el-select-dropdown__item">
                                                                                <span>王朝霞</span></li>
                                                                            <li class="el-select-dropdown__item">
                                                                                <span>覃波杰</span></li>
                                                                            <li class="el-select-dropdown__item">
                                                                                <span>郑惠斌</span></li>
                                                                            <li class="el-select-dropdown__item">
                                                                                <span>马奎</span></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="el-scrollbar__bar is-horizontal">
                                                                        <div class="el-scrollbar__thumb"
                                                                            style="transform: translateX(0%);"></div>
                                                                    </div>
                                                                    <div class="el-scrollbar__bar is-vertical">
                                                                        <div class="el-scrollbar__thumb"
                                                                            style="transform: translateY(0%);"></div>
                                                                    </div>
                                                                </div><!---->
                                                            </div>
                                                        </div><!---->
                                                    </div>
                                                </div>
                                                <div class="el-form-item is-required el-form-item--small"
                                                    style="width: 33.33%;"><label for="editBo.electManager"
                                                        class="el-form-item__label"
                                                        style="width: 140px;">电气工程科经理</label>
                                                    <div class="el-form-item__content" style="margin-left: 140px;">
                                                        <div class="el-input el-input--small is-disabled"
                                                            style="width: 100%;"><!----><input type="text"
                                                                disabled="disabled" autocomplete="off"
                                                                placeholder="请选择电气工程科经理"
                                                                class="el-input__inner"><!----><!----><!----><!---->
                                                        </div><!---->
                                                    </div>
                                                </div>
                                                <div class="el-form-item is-required el-form-item--small"
                                                    style="width: 33.33%;"><label for="editBo.harnessEngineer"
                                                        class="el-form-item__label" style="width: 140px;">线束工程师</label>
                                                    <div class="el-form-item__content" style="margin-left: 140px;">
                                                        <div class="el-input el-input--small el-input-group el-input-group--append"
                                                            style="width: 100%;"><!----><input type="text"
                                                                readonly="readonly" autocomplete="off"
                                                                placeholder="请选择线束工程师"
                                                                class="el-input__inner"><!----><!---->
                                                            <div class="el-input-group__append"><button type="button"
                                                                    class="el-button el-button--default el-button--small"><!----><i
                                                                        class="el-icon-search"></i><!----></button>
                                                            </div><!---->
                                                        </div><!---->
                                                    </div>
                                                </div>
                                                <div class="el-form-item is-required el-form-item--small"
                                                    style="width: 33.33%;"><label for="editBo.harnessPlatformEngineer"
                                                        class="el-form-item__label"
                                                        style="width: 140px;">线束平台化工程师</label>
                                                    <div class="el-form-item__content" style="margin-left: 140px;">
                                                        <div class="el-input el-input--small is-disabled"
                                                            style="width: 100%;"><!----><input type="text"
                                                                disabled="disabled" autocomplete="off"
                                                                placeholder="请输入线束平台化工程师"
                                                                class="el-input__inner"><!----><!----><!----><!---->
                                                        </div><!---->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="el-collapse-item is-active">
                                <div role="tab" aria-expanded="true" aria-controls="el-collapse-content-9395"
                                    aria-describedby="el-collapse-content-9395">
                                    <div role="button" id="el-collapse-head-9395" tabindex="0"
                                        class="el-collapse-item__header is-active"><i class="el-icon-document"></i> 备注
                                        <i class="el-collapse-item__arrow el-icon-arrow-right is-active"></i></div>
                                </div>
                                <div role="tabpanel" aria-labelledby="el-collapse-head-9395"
                                    id="el-collapse-content-9395" class="el-collapse-item__wrap">
                                    <div class="el-collapse-item__content">
                                        <div
                                            style="border-top: 1px solid rgb(226, 228, 234); border-right: 1px solid rgb(226, 228, 234); border-bottom: none; border-left: 1px solid rgb(226, 228, 234); border-image: initial; line-height: 40px; padding-left: 10px;">
                                            1、a）如是新功能优先考虑能否使用接插件库中现有的，如不能才考虑使用新接插件，如不是新功能，则不允许用新接插件；b）电器启动或关闭时有冲击电流的需提交电流曲线，还有其它特殊场景/工况的需在附件里说明；c）新增二家供应商需重新提交ICD，如被借用ICD的电流或其它影响原理的参数与要交的不同，需重新提交ICD；d）整车电源取电需要按照电源分配类型描述清楚（如常电、ACC、IG1、IG2、KL87等）。
                                        </div>
                                        <div class="el-descriptions">
                                            <div class="el-descriptions__body">
                                                <table
                                                    class="el-descriptions__table is-bordered el-descriptions--small">
                                                    <tbody>
                                                        <tr class="el-descriptions-row">
                                                            <th colspan="1"
                                                                class="el-descriptions-item__cell el-descriptions-item__label is-bordered-label "
                                                                style="width: 130px;">
                                                                <p style="margin: 5px 0px; color: rgb(0, 0, 0);">2、接地要求：
                                                                </p>
                                                                <p style="margin: 5px 0px; color: blue;">用电器工程师填</p>
                                                            </th>
                                                            <td colspan="1"
                                                                class="el-descriptions-item__cell el-descriptions-item__content">
                                                                <div class="el-textarea el-input--small"><textarea
                                                                        autocomplete="off" placeholder="请输入接地要求"
                                                                        maxlength="200" class="el-textarea__inner"
                                                                        style="min-height: 31.2222px;"></textarea><span
                                                                        class="el-input__count">0/200</span></div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tbody>
                                                        <tr class="el-descriptions-row">
                                                            <th colspan="1"
                                                                class="el-descriptions-item__cell el-descriptions-item__label is-bordered-label "
                                                                style="width: 130px;">
                                                                <p style="margin: 5px 0px; color: rgb(0, 0, 0);">
                                                                    3、其它特殊要求：</p>
                                                                <p style="margin: 5px 0px; color: blue;">用电器工程师填</p>
                                                            </th>
                                                            <td colspan="1"
                                                                class="el-descriptions-item__cell el-descriptions-item__content">
                                                                <div class="el-textarea el-input--small"><textarea
                                                                        autocomplete="off" placeholder="请输入其它特殊要求"
                                                                        maxlength="200" class="el-textarea__inner"
                                                                        style="min-height: 31.2222px;"></textarea><span
                                                                        class="el-input__count">0/200</span></div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tbody>
                                                        <tr class="el-descriptions-row">
                                                            <th colspan="1"
                                                                class="el-descriptions-item__cell el-descriptions-item__label is-bordered-label "
                                                                style="width: 130px;">
                                                                <p style="margin: 5px 0px; color: rgb(0, 0, 0);">
                                                                    4、电器集成意见：</p>
                                                                <p style="margin: 5px 0px; color: blue;">电源管理工程师填</p>
                                                            </th>
                                                            <td colspan="1"
                                                                class="el-descriptions-item__cell el-descriptions-item__content">
                                                                <div class="el-textarea el-input--small is-disabled">
                                                                    <textarea disabled="disabled" autocomplete="off"
                                                                        placeholder="请输入电器集成意见" maxlength="200"
                                                                        class="el-textarea__inner"
                                                                        style="min-height: 31.2222px;"></textarea><!---->
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="el-collapse-item is-active">
                                <div role="tab" aria-expanded="true" aria-controls="el-collapse-content-954"
                                    aria-describedby="el-collapse-content-954">
                                    <div role="button" id="el-collapse-head-954" tabindex="0"
                                        class="el-collapse-item__header is-active"><i class="el-icon-paperclip"></i> 附件
                                        <i class="el-collapse-item__arrow el-icon-arrow-right is-active"></i></div>
                                </div>
                                <div role="tabpanel" aria-labelledby="el-collapse-head-954" id="el-collapse-content-954"
                                    class="el-collapse-item__wrap">
                                    <div class="el-collapse-item__content">
                                        <div action="" name="files">
                                            <div class="el-sgmw-upload">
                                                <div tabindex="0" class="el-upload el-upload--text"><!----><button
                                                        type="button"
                                                        class="el-button el-button--primary el-button--mini"><!----><i
                                                            class="el-icon-upload2"></i><span>选择文件</span></button><input
                                                        type="file" name="files" multiple="multiple"
                                                        class="el-upload__input"></div>
                                                <div class="el-row">
                                                    <ul class="el-upload-list el-upload-list--text"></ul>
                                                </div>
                                            </div><!---->
                                            <div class="el-dialog__wrapper" style="display: none;">
                                                <div role="dialog" aria-modal="true" aria-label="是否确认上传文件"
                                                    class="el-dialog" style="margin-top: 15vh; width: 400px;">
                                                    <div class="el-dialog__header"><span
                                                            class="el-dialog__title">是否确认上传文件</span><button
                                                            type="button" aria-label="Close"
                                                            class="el-dialog__headerbtn"><i
                                                                class="el-dialog__close el-icon el-icon-close"></i></button>
                                                    </div><!---->
                                                    <div class="el-dialog__footer">
                                                        <div class="dialog-footer"><button type="button"
                                                                class="el-button el-button--default el-button--small"><!----><!----><span>取
                                                                    消</span></button><button type="button"
                                                                class="el-button el-button--primary el-button--small"><!----><!----><span>上
                                                                    传</span></button></div>
                                                    </div>
                                                </div>
                                            </div><!---->
                                        </div>
                                    </div>
                                </div>
                            </div><!----><!---->
                        </div>
                        <div style="display: flex; justify-content: center; margin-top: 20px;"><button type="button"
                                class="el-button el-button--primary el-button--medium is-plain"><!----><!----><span> 关 闭
                                </span></button><button type="button"
                                class="el-button el-button--primary el-button--medium is-plain"><!----><!----><span> 流程图
                                </span></button><!----><!----><!----><button type="button"
                                class="el-button el-button--success el-button--medium"><!----><!----><span> 保存草稿
                                </span></button><!----><button type="button"
                                class="el-button el-button--primary el-button--medium"><!----><!----><span> 提 交
                                </span></button></div>
                    </div>
                </div>
            </div>
            <div class="el-dialog__wrapper" style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="已审批通过的ICD单汇总" class="el-dialog"
                    style="margin-top: 15vh; width: 80%;">
                    <div class="el-dialog__header"><span class="el-dialog__title">已审批通过的ICD单汇总</span><button
                            type="button" aria-label="Close" class="el-dialog__headerbtn"><i
                                class="el-dialog__close el-icon el-icon-close"></i></button></div><!----><!---->
                </div>
            </div>
            <div class="el-dialog__wrapper" style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="更改记录" class="el-dialog"
                    style="margin-top: 15vh; width: 500px;">
                    <div class="el-dialog__header"><span class="el-dialog__title">更改记录</span><button type="button"
                            aria-label="Close" class="el-dialog__headerbtn"><i
                                class="el-dialog__close el-icon el-icon-close"></i></button></div><!----><!---->
                </div>
            </div>
            <div class="el-dialog__wrapper" style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="接插件信息" class="el-dialog"
                    style="margin-top: 15vh; width: 500px;">
                    <div class="el-dialog__header"><span class="el-dialog__title">接插件信息</span><button type="button"
                            aria-label="Close" class="el-dialog__headerbtn"><i
                                class="el-dialog__close el-icon el-icon-close"></i></button></div><!----><!---->
                </div>
            </div>
            <div class="el-dialog__wrapper" style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="连接器PIN脚信息" class="el-dialog"
                    style="margin-top: 15vh; width: 1000px;">
                    <div class="el-dialog__header"><span class="el-dialog__title">连接器PIN脚信息</span><button type="button"
                            aria-label="Close" class="el-dialog__headerbtn"><i
                                class="el-dialog__close el-icon el-icon-close"></i></button></div><!----><!---->
                </div>
            </div><!---->
            <div class="el-dialog__wrapper" style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="流程图" class="el-dialog"
                    style="margin-top: 15vh; width: 80%;">
                    <div class="el-dialog__header"><span class="el-dialog__title">流程图</span><button type="button"
                            aria-label="Close" class="el-dialog__headerbtn"><i
                                class="el-dialog__close el-icon el-icon-close"></i></button></div><!----><!---->
                </div>
            </div>
            <div class="el-dialog__wrapper" style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="借用车型ICD单号" class="el-dialog"
                    style="margin-top: 15vh; width: 80%;">
                    <div class="el-dialog__header"><span class="el-dialog__title">借用车型ICD单号</span><button type="button"
                            aria-label="Close" class="el-dialog__headerbtn"><i
                                class="el-dialog__close el-icon el-icon-close"></i></button></div><!----><!---->
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
} from '@element-plus/icons-vue'
</script>
